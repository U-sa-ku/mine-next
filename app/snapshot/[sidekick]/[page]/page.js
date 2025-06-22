import { getPhotoListData, getPagingPhotoListData } from "@/libs/GetPostData"
import PhotoList from "@/app/components/sections/PhotoList/PhotoList";
import PhotoSlider from "@/app/components/sections/PhotoSlider/PhotoSlider";

const category = 'snapshot';

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
export const metadata = {
  title: `${category} | mine`,
  description: "スマートフォンで撮った写真一覧",
  openGraph: {
    title: `${category} | mine`,
    description: "スマートフォンで撮った写真一覧",
    url: `${process.env.CONTENTS_DOMAIN}/${category}/1/`,
    siteName: "mine",
    images: [
      {
        url: `${process.env.CONTENTS_DOMAIN}/ogp.png`,
      },
    ],
    type: "website",
  },    
}

// コンポーネント
export default async function snapshot({ params }) {
  const sidekick = params.sidekick;
  const page = params.page ? parseInt(params.page, 10) : 1;
  const limit = 24;
  const snapshotListData = await getPagingPhotoListData(limit, category, sidekick, page);
  const totalPages = Math.ceil(snapshotListData.totalCount / limit);
  const photographListData = await getPhotoListData(10, 'photograph', sidekick);
  const photographListDataTotalCount = photographListData.totalCount;

  return (
    <>
      <PhotoList
        category={category}
        sidekick={sidekick}
        photoListData={snapshotListData.contents}
        totalPages={totalPages}
        currentPage={page}      
      />
      {photographListDataTotalCount != 0 &&
        <div className="otherContents">
          <PhotoSlider
            category='photograph'
            sidekick={sidekick}
            photoListData={photographListData.contents}
          />
        </div>
      }
    </>
  );
}
