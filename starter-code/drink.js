import { cocktails } from "./data.js"; 

const drinkWrapper = document.querySelector(".drink-wrapper")
cocktails.forEach(arr => {
      let cocktailDrink = `
           <div class="cocktail-drink">
           <img src="${arr.strDrinkThumb}" />
           <p class="cocktail-name-drink">${arr.strDrink}</p> 
           </div>`;
           let div = document.createElement('div');
           div.setAttribute("class", "cocktails-blocks-drink")
           div.innerHTML = cocktailDrink;
           drinkWrapper.appendChild(div);
      });
const body = document.querySelector("body")
body.addEventListener("click", function(){
  console.log("Hello")
})

 
