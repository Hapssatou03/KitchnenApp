document
  .querySelector(".getRecipeBtn")
  .addEventListener("click", getRandomRecipe);
async function getRandomRecipe() {
  const recipeContainer = document.querySelector(".recipe");
  recipeContainer.innerHTML = "Chargement..."; // Afficher un message de chargement
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const meal = data.meals[0];
    // Construire l'affichage de la recette
    const recipeHTML = ` <h2>${meal.strMeal}</h2>
     <img src="${meal.strMealThumb}" alt="Image de la recette">
     <p><strong>Catégorie:</strong> ${
       meal.strCategory
     }</p> <p><strong>Instructions:</strong> ${meal.strInstructions}</p> 
    <h3>Ingrédients:</h3> 
    <ul> ${getIngredientsList(meal)} </ul> `;
    // Afficher la recette dans le conteneur
    recipeContainer.innerHTML = recipeHTML;
  } catch (error) {
    recipeContainer.innerHTML = "Une erreur est survenue. Veuillez réessayer.";
    console.error("Erreur:", error);
  }
}
// Fonction pour récupérer les ingrédients et les mesures de la recette
function getIngredientsList(meal) {
  let ingredients = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients += `<li>${ingredient} - ${measure}</li>`;
    }
  }
  return ingredients;
}
