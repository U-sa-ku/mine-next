import { getPhotoListData } from "@/libs/GetPostData"
import Mainvisual from "@/feature/top/Mainvisual/Mainvisual";
import PhotoSlider from "@/app/components/sections/PhotoSlider/PhotoSlider";

// メタデータ生成
export const metadata = {
  title: "mine",
  description: "車とバイクとカメラ",
  openGraph: {
    title: "mine",
    description: "車とバイクとカメラ",
    url: process.env.CONTENTS_DOMAIN,
    siteName: "mine",
    images: [
      {
        url: `${process.env.CONTENTS_DOMAIN}/ogp.png`,
      },
    ],
    type: "website",
  },  
}

export default async function top() {
  const photographListData  = await getPhotoListData(10, 'photograph');
  const snapshotListData  = await getPhotoListData(10, 'snapshot');

  return (
    <>
      <Mainvisual />
      <PhotoSlider
        sectionName='photograph'
        photoListData={photographListData.contents}
      />
      <PhotoSlider
        sectionName='snapshot'
        photoListData={snapshotListData.contents}
      />
    </>
  );
}
