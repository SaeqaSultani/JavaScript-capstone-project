import getLike from './getLike.js';

const context = document.getElementById('context');

const dataUi = (element) => {
  // console.log(element.idMeal);
  context.innerHTML += `

                    <div class="items">
                            <img class="img" src="${element.strMealThumb}" alt="logo">
                            <div class="dec">
                                <h1 class="title">${element.strMeal}</h1>
                                <div class="like">
                                    <button id=${element.idMeal} onclick="like(this)" class="like-button"></button>
                                    
                                    <p id="like-count${element.idMeal}"></p>
                                </div>
                            </div>
                    </div>`;
  getLike();
};

export default dataUi;