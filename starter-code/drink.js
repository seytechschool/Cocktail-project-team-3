import { cocktails } from "./data.js"; 
import {hello} from "./main.js"; 
const drinkWrapper = document.querySelector(".drink-wrapper")
  let find = cocktails.find(el => {
    return el.idDrink === localStorage.getItem("currentCoctailId")
  })
  
       let drinkRecieps = `
       <div class="cocktail-drink">
       <img src="${find.strDrinkThumb}" />
       <h3 class="cocktail-name-drink">${find.strDrink}</h3> 
       </div>`
       let div = document.createElement('div');
       div.setAttribute("class", "cocktails-blocks-drink")
       div.innerHTML = drinkRecieps;
       drinkWrapper.appendChild(div);
 
