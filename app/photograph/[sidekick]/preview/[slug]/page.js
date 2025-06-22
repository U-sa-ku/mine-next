import { getPhotoListData, getPhotoData } from "@/libs/GetPostData";
import PhotoPreview from "@/app/components/sections/PhotoPreview/PhotoPreview";

const category = 'photograph';

// 静的パス生成
// export async function generateStaticParams() {
//   const photoListData = await getPhotoListData(100, category);
//   const contents = photoListData.contents;

//   return contents.map((content) => ({
//     slug: content.id,
//   }))  
// }

// メタデータ生成
export async function generateMetadata({ params }) {
  const sidekick = params.sidekick;
  const { currentPhotoData }  = await getPhotoData(params.slug, category);
  const metaTitle = `preview | ${sidekick} | photograph | mine`;
  const metaDescription = 'ミラーレス一眼で撮った写真プレビュー';

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${process.env.CONTENTS_DOMAIN}/photograph/${sidekick}/preview/${params.slug}`,
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
  const sidekick = params.sidekick;
  const { currentPhotoData, previousPhotoData, nextPhotoData }  = await getPhotoData(params.slug, category, sidekick);
  const listNumber = searchParams.list ? searchParams.list : 1;

  return (
    <PhotoPreview
      category={category}
      sidekick={sidekick}
      currentPhotoData={currentPhotoData}
      previousPhotoData={previousPhotoData}
      nextPhotoData={nextPhotoData}
      listNumber={listNumber}
    />
  );
}
