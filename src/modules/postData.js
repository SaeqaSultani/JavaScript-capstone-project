const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jmayAhsOBoJ6rGsylCJd/likes';

const postData = async (id, like) => {
    const response = await fetch(likeUrl, {
      method: 'POST',
      body:JSON.stringify({ item_id: id, likes: like}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  };

  export default postData;