import { cocktails } from "./data.js"; // this is your data


   // <p class="cocktail-instructions">${arr.strInstructions}</p>
///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
// let wrapper = document.querySelector('.wrapper');

let cocktailWrapper = document.querySelector(".cocktail-wrapper");
let searchBar = document.getElementById('cocktail-search-name');

// cocktails.forEach(arr => {
//   let cocktail = `
//   <div class="cocktail">
//   <div class="cocktails-blocks" name="${arr.strDrink}">
//   <img src="${arr.strDrinkThumb}" />
//   <p class="cocktail-name">${arr.strDrink}</p> 
//   </div></div>`;
//   /* let div = document.createElement('div');
//   div.setAttribute("class", "cocktails-blocks")
//   div.innerHTML = cocktail;
//   cocktailWrapper.appendChild(div); */
//   cocktailWrapper.innerHTML += cocktail;
// });

function renderData(data, wrapper) {
  data.forEach((arr,idx) => {
    let cocktail = `
    <div class="cocktail">
    <div class="cocktails-blocks" name="${arr.strDrink}">
    <img src="${arr.strDrinkThumb}" />
    <p class="cocktail-name">${arr.strDrink}</p> 
    </div></div>`;
    wrapper.innerHTML += cocktail;
  });
}

renderData(cocktails, cocktailWrapper);

// searchBar.addEventListener('keyup', filterDrink);
// function filterDrink() {
//   let drink = searchBar.value.toUpperCase();
//   let div = document.querySelectorAll('.cocktails-blocks');
//   div.forEach(arr => arr.innerHTML = "");
  
//   cocktails.forEach(arr => {
//     if ()
//   })
  
// }

searchBar.addEventListener("input", searchStrDrink)
// searchButton.addEventListener("click", searchStrDrink)

function searchStrDrink(){
  let target = searchBar.value.toLowerCase();
  let div = document.querySelectorAll(".cocktails-blocks")
  div.forEach(el => el.innerHTML = "");
  let filteredCoctailName = cocktails.filter(el => el.strDrink.toLowerCase().includes(target));
  // renderData(filteredCoctailName, div);
  filteredCoctailName.forEach((el,index) => {
    let filteredCoctail = `
    <div class="cocktail">
    <img src="${el.strDrinkThumb}" />
    <p class="cocktail-name">${el.strDrink}</p> 
    </div>`;
    div[index].innerHTML = filteredCoctail;
  });
}

