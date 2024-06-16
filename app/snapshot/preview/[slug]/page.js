import { getPhotoData } from "@/libs/GetPostData"
import PhotoPreview from "@/app/components/sections/PhotoPreview/PhotoPreview";

// meta
export async function generateMetadata({ params }) {
  const { currentPhotoData }  = await getPhotoData(params.slug, 'snapshot');

  return {
    title: "preview | snapshot | mine",
    description: "スマートフォンで撮った写真プレビュー",
    openGraph: {
      title: "preview | snapshot | mine",
      description: "スマートフォンで撮った写真プレビュー",
      url: `${process.env.CONTENTS_DOMAIN}/snapshot/preview/${params.slug}`,
      siteName: "mine",
      images: [
        {
          url: currentPhotoData.photo.url,
        },
      ],
      type: "article",
    },
  }
}

export default async function photographPreview({ params }) {
  const category = 'snapshot';
  const { currentPhotoData, previousPhotoData, nextPhotoData }  = await getPhotoData(params.slug, category);

  return (
    <PhotoPreview
      currentPhotoData={currentPhotoData}
      previousPhotoData={previousPhotoData}
      nextPhotoData={nextPhotoData}
      category={category}
    />
  );
}
