// Display a Recipe from a hard coded object
const recipe = {
  name: "Seafood Pasta",
  ingredients: "Pasta, Seafood, Tomatoes Sauce",
  method: "Cook the pasta, cook the seafood in the sauce and combine",
  img: "./images/pasta.png",
};
btnDisplay = document.querySelector("#btnDisplay");
btnDisplay.addEventListener("click", displayRecipe);
function displayRecipe() {
  for (let property in recipe) {
    if (recipe.hasOwnProperty(property)) {
      // Do things here
      document.querySelector(
        "#displayCard"
      ).innerHTML = `<div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${recipe.img}" alt="Card image cap">
                      <div class="card-body text-center">
                          <h3 class="card-title">${recipe.name}</h3>
                          <h6 class="card-title text-start">Ingredients:</h6>
                          <p class="card-text text-start">${recipe.ingredients}</p>
                          <h6 class="card-title text-start">Method:</h6>
                          <p class="card-text text-start">${recipe.method}</p>
                          <a href="#" class="btn btn-danger m-4"> Delete Recipe</a>
                      </div>
                      </div>`;
    }
  }
}

const validationName = document.querySelector("#input-validation-name");
const validationIngredients = document.querySelector(
  "#input-validation-ingredients"
);
const validationMethod = document.querySelector("#input-validation-method");
// Selected the span using its id
const inputValidation = document.querySelector("#input-validation");

const newRecipeName = document.querySelector("#new-recipe-name");
const newRecipeIngredients = document.querySelector("#new-recipe-ingredients");
const newRecipeMethod = document.querySelector("#new-recipe-method");

const addRecipe = document.querySelector("#addRecipe");
addRecipe.addEventListener("click", newRecipe);
// function newRecipe(event) {
//   event.preventDefault();
//   if (
//     newRecipeName.value === "" ||
//     newRecipeIngredients.value === "" ||
//     newRecipeMethod.value === ""
//   ) {
//     validationName.innerHTML = "Please add your notes";
//     validationIngredients.innerHTML = "Please add your notes";
//     validationMethod.innerHTML = "Please add your notes";
//   }
// }

// Function validation
function newRecipe(event) {
  event.preventDefault();
  if (
    newRecipeName.value === "" &&
    newRecipeIngredients.value === "" &&
    newRecipeMethod.value === ""
  ) {
    inputValidation.innerHTML = "All fields are mandatory.";
    inputValidation.style.color = "red";
  } else if (newRecipeName.value === "") {
    inputValidation.innerHTML = "Recipe name is mandatory";
    inputValidation.style.color = "red";
  } else if (newRecipeIngredients.value === "") {
    inputValidation.innerHTML = "Ingredients are mandatory";
    inputValidation.style.color = "red";
  } else if (newRecipeMethod.value === "") {
    inputValidation.innerHTML = "Method is mandatory";
    inputValidation.style.color = "red";
  } else {
    // to clean all field and span messages after clicking in the button
    inputValidation.style.display = "none";
    newRecipeName.value = "";
    newRecipeIngredients.value = "";
    newRecipeMethod.value = "";
  }
}
