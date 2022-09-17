const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jmayAhsOBoJ6rGsylCJd/likes';

const getLike = async () => {
  const response = await fetch(likeUrl);
  const data = await response.json();
  data.forEach((element) => {
    document.querySelector(`#like-count${element.item_id}`).innerHTML = `${element.likes} likes`;
  });
};

export default getLike;