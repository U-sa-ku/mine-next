import { getPhotoListData, getPhotoData } from "@/libs/GetPostData";
import PhotoPreview from "@/app/components/sections/PhotoPreview/PhotoPreview";

const category = 'snapshot';

// 静的パス生成
export async function generateStaticParams() {
  const photoListData = await getPhotoListData(100, category);
  const contents = photoListData.contents;

  return contents.map((content) => ({
    slug: content.id,
  }))  
}

// メタデータ生成
export async function generateMetadata({ params }) {
  const { currentPhotoData }  = await getPhotoData(params.slug, category);

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

// コンポーネント
export default async function photographPreview({ params, searchParams }) {
  const { currentPhotoData, previousPhotoData, nextPhotoData }  = await getPhotoData(params.slug, category);
  const listNumber = searchParams.list ? searchParams.list : 1;

  return (
    <PhotoPreview
      currentPhotoData={currentPhotoData}
      previousPhotoData={previousPhotoData}
      nextPhotoData={nextPhotoData}
      category={category}
      listNumber={listNumber}
    />
  );
}
