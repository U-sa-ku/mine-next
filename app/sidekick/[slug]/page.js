export const fetchCache = 'force-no-store';

import { getSidekickData, getPhotoListData } from "@/libs/GetPostData"
import Contents from '@/feature/sidekick/Contents/Contents';

// meta
export async function generateMetadata({ params }) {
  const sidekickData = await getSidekickData(params.slug);

  return {
    title: `${sidekickData.maker} ${sidekickData.name} | sidekick | mine`,
    description: `${sidekickData.since_year}年${sidekickData.since_month}月から所有している${sidekickData.maker}の${sidekickData.name}`,
    openGraph: {
      title: `${sidekickData.name} | sidekick | mine`,
      description: `${sidekickData.since_year}年${sidekickData.since_month}月から所有している${sidekickData.maker}の${sidekickData.name}`,
      url: process.env.CONTENTS_DOMAIN,
      siteName: "mine",
      images: [
        {
          url: sidekickData.mainvisual.url,
        },
      ],
      type: "article",    
    }
  };
}

export default async function sidekick({ params }) {
  const sidekickData  = await getSidekickData(params.slug);
  const photographListData  = await getPhotoListData(10, 'photograph', params.slug);
  const snapshotListData  = await getPhotoListData(10, 'snapshot', params.slug);

  return (
    <Contents
      sidekickData={sidekickData}
      photographListData={photographListData}
      snapshotListData={snapshotListData}
    />
  );
}
