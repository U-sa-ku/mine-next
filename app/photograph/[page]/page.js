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
export const metadata = {
  title: `${category} | mine`,
  description: "ミラーレス一眼で撮った写真一覧",
  openGraph: {
    title: `${category} | mine`,
    description: "ミラーレス一眼で撮った写真一覧",
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

export default async function photograph({ params }) {
  const page = params.page ? parseInt(params.page, 10) : 1;
  const limit = 24;
  const photographListData = await getPagingPhotoListData(limit, category, page);
  const totalPages = Math.ceil(photographListData.totalCount / limit);
  const snapshotListData  = await getPhotoListData(10, 'snapshot');

  return (
    <>
      <PhotoList
        sectionName={category}
        photoListData={photographListData.contents}
        totalPages={totalPages}
        currentPage={page}      
      />
      <div className="otherContents">
        <PhotoSlider
          sectionName='snapshot'
          photoListData={snapshotListData.contents}
        />
      </div>    
    </>
  );
}
