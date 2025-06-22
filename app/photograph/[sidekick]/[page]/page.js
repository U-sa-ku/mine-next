import { getPhotoListData, getPagingPhotoListData } from "@/libs/GetPostData"
import PhotoList from "@/app/components/sections/PhotoList/PhotoList";
import PhotoSlider from "@/app/components/sections/PhotoSlider/PhotoSlider";

const category = 'photograph';

// 静的パス生成
export async function generateStaticParams() {
  const limit = 24;
  const photographListData = await getPagingPhotoListData(limit, category, 1);
  const totalPages = Math.ceil(photographListData.totalCount / limit);
  
  const params = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString()
  }));

  return params;
}

// メタデータ生成
export async function generateMetadata({ params }) {
  const sidekick = params.sidekick;
  const metaTitle = `${sidekick} | ${category} | mine`;
  const metaDescription = 'ミラーレス一眼で撮影した写真一覧';

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${process.env.CONTENTS_DOMAIN}/${category}/${sidekick}/1/`,
      siteName: "mine",
      images: [
        {
          url: `${process.env.CONTENTS_DOMAIN}/ogp.png`,
        },
      ],
      type: "website",
    },
  };
}

// コンポーネント
export default async function photograph({ params }) {
  const sidekick = params.sidekick;
  const page = params.page ? parseInt(params.page, 10) : 1;
  const limit = 24;
  const photographListData = await getPagingPhotoListData(limit, category, sidekick, page);
  const totalPages = Math.ceil(photographListData.totalCount / limit);
  const snapshotListData = await getPhotoListData(10, 'snapshot', sidekick);
  const snapshotListDataTotalCount = snapshotListData.totalCount;

  return (
    <>
      <PhotoList
        category={category}
        sidekick={sidekick}
        photoListData={photographListData.contents}
        totalPages={totalPages}
        currentPage={page}
      />
      {snapshotListDataTotalCount != 0 &&
        <div className="otherContents">
          <PhotoSlider
            category='snapshot'
            sidekick={sidekick}
            photoListData={snapshotListData.contents}
            isShowNavigation={true}
          />
        </div>
      }
    </>
  );
}
