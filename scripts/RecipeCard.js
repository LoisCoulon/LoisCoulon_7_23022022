class RecipeCard {
  constructor(recipe) {
    this.recipe = recipe;
  }

  createRecipeCard() {
    const container = document.createElement("article");
    container.classList.add("thumbnail");
    const ingredient = this.getIngredients(this.recipe.ingredients)

    const recipeCard = `
                <img src="" alt="Illustration de ${this.recipe.name}">
                <div class="thumbnail-head">
                    <h2>${this.recipe.name}</h2>
                    <div class="clock">
                        <i class="far fa-clock"></i>
                        <span>${this.recipe.time}min</span>
                    </div>
                </div>
                <div class="thumbnail-body">
                    <div class="thumbnail-body-ingredients">
                        <p><strong>${ingredient.ingredient} : </strong>${ingredient.quantity}${ingredient.unit}</p>
                    </div>
                    <div class="thumbnail-body-recipe">
                        <p>${this.recipe.description} </p>
                    </div>
                </div>
        `;

    container.innerHTML = recipeCard;
    return container;
  }

  getIngredients(ingredients) {
    for (let index = 0; index < ingredients.length; index++) {
        
    return ingredients[index]
    }         
   
  }
}
