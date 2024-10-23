"use strict";
//selection des classes
const btn = document.querySelector(".btn");
const form = document.querySelector(".form");

const recettes = [
  "pate",
  "Poulet grillet",
  "Filet de saumon sauce teriyaki à lorange",
  "Nouilles aux légumes sauce cacahuètes à l'orange",
  "oeuf",
];
// const recetteAleatoir = math.random();

btn.addEventListener("click", () => {
  getRecette();
});
function getRecette() {
  let searchInputxt = form.value.trim();
  console.log(searchInputxt.length);
  fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputxt}`).then(
    (response) =>
      response.json().then((data) => {
        console.log(data);
      })
  );

  let html = "";

  if (data.meal) {
    data.meal.forEach((meals) => {
      html += `<div class="card">
<div class="meal" ${meals.strMeal}> </div>
<div class=${meals}> </div>
<div class=""> 
    <img src=${meals.png} alt="" srcset="">
</div>
<div class=""></div>
</div> `;
    });
  }
}

getRecette();

// const url =
//   "https://api.spoonacular.com/recipes/random?apiKey=cd9c2ff5756e45189cecfffac0c2cacd";
// try {
//   data = await fetch();
//   const reponse = await data.json();
//   console.log(reponse);
//   return reponse;
// } catch (error) {
//   console.error("les recettes demandées ne sont pas accessibleq", error);
// }

// async function app() {
//   const ingredients = ["Oeuf", "tomate", "lait", "sel", "farine"];
//   const recipe = await getRecette(ingredients);
//   if (recipe < ingredients.length) {
//     console.log(" ");
//   }
//   recipe.forEach((recipes, index) => {
//     console.log(`${index + 1}. ${recipe.tittle}`);

//     console.log(`le temps de preâration ${recipe.readyTime}`);
//   });
// }
