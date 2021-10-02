import { cocktails } from "./data.js"; // this is your data


   // <p class="cocktail-instructions">${arr.strInstructions}</p>
///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
// let wrapper = document.querySelector('.wrapper');
let cocktailWrapper = document.querySelector(".cocktail-wrapper");
cocktails.forEach(arr => {
	let cocktail = `
    <div class="cocktail">
        <img src="${arr.strDrinkThumb}" />
        <p class="cocktail-name">${arr.strDrink}</p> 
        </div>`;
        let div = document.createElement('div');
        div.setAttribute("class", "cocktails-blocks")
        div.innerHTML = cocktail;
        cocktailWrapper.appendChild(div);
    });
 