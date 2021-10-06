import { cocktails } from "./data.js"; // this is your data


   // <p class="cocktail-instructions">${arr.strInstructions}</p>
///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
// let wrapper = document.querySelector('.wrapper');

let cocktailWrapper = document.querySelector(".cocktail-wrapper");
let searchBar = document.getElementById('cocktail-search-name');

cocktails.forEach(arr => {
  let cocktail = `
  <div class="cocktail">
  <div class="cocktails-blocks" name="${arr.strDrink}">
  <img src="${arr.strDrinkThumb}" />
  <p class="cocktail-name">${arr.strDrink}</p> 
  </div></div>`;
  /* let div = document.createElement('div');
  div.setAttribute("class", "cocktails-blocks")
  div.innerHTML = cocktail;
  cocktailWrapper.appendChild(div); */
  cocktailWrapper.innerHTML += cocktail;
});

console.log(document.querySelectorAll('.cocktails-blocks'));

searchBar.addEventListener('keyup', filterDrink);
function filterDrink() {
  let drink = searchBar.value.toUpperCase();
  let div = document.querySelectorAll('.cocktails-blocks');
  div.forEach(subDiv => {
    if (!subDiv.innerText.includes(drink)) {
      subDiv.style.display = 'none';
      subDiv.order = 0;
    } else {
      subDiv.style.display = 'block';
      subDiv.order = 1;
    }
  });
}

