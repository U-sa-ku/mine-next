// photo API取得 (一覧)
export const getPhotoListData = async (limit, category, sidekick) => {
  let apiCategoryFilter = '';
  let apiSidekickFilter = '';

  if(category) apiCategoryFilter = `&filters=category[contains]${category}`;
  if(category && sidekick) apiSidekickFilter = `[and]sidekick[contains]${sidekick}`;

  const photoListDataResponse = await fetch(
    `${process.env.SERVICE_DOMAIN}/photo/?limit=${limit}${apiCategoryFilter}${apiSidekickFilter}`, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      }
    }
  );  

  const photoListData = await photoListDataResponse.json();

  return photoListData;
}

// photo API取得 (一覧 + ページング)
export const getPagingPhotoListData = async (limit, category, page, sidekick) => {
  let apiSidekickFilter = '';

  if(sidekick) apiSidekickFilter = `[and]sidekick[contains]${sidekick}`;

  const photoListDataResponse = await fetch(
    `${process.env.SERVICE_DOMAIN}/photo/?limit=${limit}&filters=category[contains]${category}${apiSidekickFilter}&offset=${(page - 1) * limit}`, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      }
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
      }
    }
  );

  const currentPhotoData = await currentPhotoDataResponse.json();

  const photoListDataResponse = await fetch(
    `${process.env.SERVICE_DOMAIN}/photo/?limit=100&filters=category[contains]${category}&fields=id&orders=publishedAt`, {
      headers: {
        'X-API-KEY': process.env.API_KEY,     
      },
      cache: 'no-store'
    }
  );

  const photoListData = await photoListDataResponse.json();
  const currentPhotoIndex = photoListData.contents.findIndex(photoData => photoData.id === currentPhotoData.id);
  const previousPhotoData = currentPhotoIndex > 0 ? photoListData.contents[currentPhotoIndex - 1] : null;
  const nextPhotoData = currentPhotoIndex < photoListData.contents.length - 1 ? photoListData.contents[currentPhotoIndex + 1] : null;

  return { currentPhotoData, previousPhotoData, nextPhotoData }
}

// sidekick API取得
export const getSidekickData = async (slug) => {
  const id = slug ? slug : '';

  const sidekickDataResponse = await fetch(
    `${process.env.SERVICE_DOMAIN}/sidekick/${id}`, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      }
    }
  );

  const sidekickData = await sidekickDataResponse.json();

  return sidekickData;
}
