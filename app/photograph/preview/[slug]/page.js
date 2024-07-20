import { getPhotoListData, getPhotoData } from "@/libs/GetPostData";
import PhotoPreview from "@/app/components/sections/PhotoPreview/PhotoPreview";

const category = 'photograph';

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
    title: "preview | photograph | mine",
    description: "ミラーレス一眼で撮った写真プレビュー",
    openGraph: {
      title: "preview | photograph | mine",
      description: "ミラーレス一眼で撮った写真プレビュー",
      url: `${process.env.CONTENTS_DOMAIN}/photograph/preview/${params.slug}`,
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
      category={category}
      currentPhotoData={currentPhotoData}
      previousPhotoData={previousPhotoData}
      nextPhotoData={nextPhotoData}
      listNumber={listNumber}
    />
  );
}
