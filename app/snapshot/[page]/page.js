import { getPhotoListData, getPagingPhotoListData } from "@/libs/GetPostData"
import PhotoList from "@/app/components/sections/PhotoList/PhotoList";
import PhotoSlider from "@/app/components/sections/PhotoSlider/PhotoSlider";

// meta
export const metadata = {
  title: "snapshot | mine",
  description: "スマートフォンで撮った写真一覧",
  openGraph: {
    title: "snapshot | mine",
    description: "スマートフォンで撮った写真一覧",
    url: `${process.env.CONTENTS_DOMAIN}/snapshot/1/`,
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
  const snapshotListData  = await getPagingPhotoListData(limit, 'snapshot', page);
  const totalPages = Math.ceil(snapshotListData.totalCount / limit);
  const photographListData  = await getPhotoListData(10, 'photograph');

  return (
    <>
      <PhotoList
        sectionName='snapshot'
        photoListData={snapshotListData.contents}
        totalPages={totalPages}
        currentPage={page}      
      />
      <div className="otherContents">
        <PhotoSlider
          sectionName='photograph'
          photoListData={photographListData.contents}
        />
      </div>    
    </>
  );
}
