import { cocktails } from "./data.js"; // this is your data
// export { drink }

   // <p class="cocktail-instructions">${arr.strInstructions}</p>
///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////
// let wrapper = document.querySelector('.wrapper');
let cocktailWrapper = document.querySelector(".cocktail-wrapper");
let searchButton = document.querySelector(".search-button")
let searchInput = document.querySelector(".cocktail-search-name")

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

searchInput.addEventListener("input", searchStrDrink)

function searchStrDrink(){
   let div = document.querySelectorAll(".cocktails-blocks")
   div.forEach(el => el.innerHTML = "")
   let filteredCoctailName = cocktails.filter(el =>{
      return el.strDrink.toLowerCase().includes(searchInput.value.toLowerCase());
   })
   filteredCoctailName.forEach((el,index) =>{
      let filteredCoctails = `
      <div class="cocktail">
      <img src="${el.strDrinkThumb}" />
      <p class="cocktail-name">${el.strDrink}</p> 
      </div>`;
      div[index].innerHTML = filteredCoctails
   })
}
////////////////////////////////////Link to New HTML /////////////////////////

const block = document.querySelectorAll(".cocktail");
block.forEach(el => {
      el.addEventListener("click", function(){
         location.href="drink.html";
      })
   })
// cocktailWrapper.addEventListener("click", drink)
// function drink(event) {
//         console.log(event.srcElement.innerHTML)
//    }
cocktailWrapper.addEventListener("click", hello) 
export function hello(){
   console.log("HELLO")
}