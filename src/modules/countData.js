const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s';
const type = document.getElementById('type');


const countData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    type.innerHTML = `Types(${data.meals.length})`;
  };
  
  export default countData;
  