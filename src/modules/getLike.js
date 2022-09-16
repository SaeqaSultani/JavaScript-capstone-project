const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jmayAhsOBoJ6rGsylCJd/likes';


const getLike = async (idMeal) =>{
    const response = await fetch(likeUrl);
    const data = await response.json();
    let numLikes = data.filter(like => {
        
        like.item_id === idMeal

       
    });
    console.log(numLikes);

    return numLikes;
  }

  export default getLike;