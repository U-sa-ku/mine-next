// photo API取得 (一覧)
export const getPhotoListData = async (limit, category, sidekick) => {
  let apiCategoryFilter;
  let apiSidekickFilter;

  if(category) {
    apiCategoryFilter = `&filters=category[contains]${category}`;
  } else {
    apiCategoryFilter = '';
  }

  if(category && sidekick) {
    apiSidekickFilter = `[and]sidekick[contains]${sidekick}`;
  } else {
    apiSidekickFilter = '';
  }

  const photoListDataResponse = await fetch(
    `${process.env.SERVICE_DOMAIN}/photo/?limit=${limit}${apiCategoryFilter}${apiSidekickFilter}`, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
      // next: { revalidate: 86400 },
    }
  );  

  const photoListData = await photoListDataResponse.json();

  return photoListData;
}

// photo API取得 (一覧 + ページング)
export const getPagingPhotoListData = async (limit, category, page) => {
  const photoListDataResponse = await fetch(
    `${process.env.SERVICE_DOMAIN}/photo/?limit=${limit}&filters=category[contains]${category}&offset=${(page - 1) * limit}`, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
      // next: { revalidate: 86400 },
    }
  );

  const photoListData = await photoListDataResponse.json();

  return photoListData;
}

// photo API取得 (詳細)
export const getPhotoData = async (slug, category) => {
  // 現在の投稿データ取得
  const currentPhotoDataResponse = await fetch(
    `${process.env.SERVICE_DOMAIN}/photo/${slug}`, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
      // next: { revalidate: 86400 },
    }
  );

  const currentPhotoData = await currentPhotoDataResponse.json();

  // 前後の投稿データ取得
  const photoListDataResponse = await fetch(
    `${process.env.SERVICE_DOMAIN}/photo/?limit=1000&filters=category[contains]${category}&fields=id&orders=publishedAt`, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
      // next: { revalidate: 86400 },
    }
  );

  const photoListData = await photoListDataResponse.json();
  const currentPhotoIndex = photoListData.contents.findIndex(photoData => photoData.id === currentPhotoData.id);
  const previousPhotoData = currentPhotoIndex > 0 ? photoListData.contents[currentPhotoIndex - 1] : null;
  const nextPhotoData = currentPhotoIndex < photoListData.contents.length - 1 ? photoListData.contents[currentPhotoIndex + 1] : null;

  return { currentPhotoData, previousPhotoData, nextPhotoData }
}

// sidekick API取得 (詳細)
export const getSidekickData = async (slug) => {
  const sidekickDataResponse = await fetch(
    `${process.env.SERVICE_DOMAIN}/sidekick/${slug}`, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
      // next: { revalidate: 86400 },
    }
  );

  const sidekickData = await sidekickDataResponse.json();

  return sidekickData;
}
