import countLikes from "./countLikes";

const context = document.getElementById('context');

const dataUi = (element) => {
    context.innerHTML += `
                    <div class="items">
                            <img class="img" src="${element.strMealThumb}" alt="logo">
                            <div class="dec">
                                <h1 class="title">${element.strMeal}</h1>
                                <div class="like">
                                    <button id=${element.idMeal} onclick="like(this)" class="like-button"></button>
                                    <p class="cunter">${parseInt(0,countLikes())}</p>
                                </div>
                            </div>
                    </div>`;
};

export default dataUi;