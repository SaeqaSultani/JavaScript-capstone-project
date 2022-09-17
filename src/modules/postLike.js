import getLike from './getLike.js';

const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jmayAhsOBoJ6rGsylCJd/likes';

const postData = async (id) => {
  const body = JSON.stringify({ item_id: id });
  fetch(likeUrl, {
    method: 'POST',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  getLike();
};

export default postData;