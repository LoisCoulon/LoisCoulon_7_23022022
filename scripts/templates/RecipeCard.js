class RecipeCard {
  constructor(recipe) {
    this.name = recipe.name
    this.ingredients = recipe.ingredients
    this.time = recipe.time
    this.description = recipe.description
  }

  createRecipeCard() {
  
    const recipeCard = `
              <article class="thumbnail">
                <img src="" alt="Illustration de ${this.name}">
                <div class="thumbnail-head">
                    <h2>${this.name}</h2>
                    <div class="clock">
                        <i class="far fa-clock"></i>
                        <span>${this.time}min</span>
                    </div>
                </div>
                <div class="thumbnail-body">
                    <div class="thumbnail-body-ingredients">
                        <ul class="ingredients">
                          ${this.ingredients.map(ingredient => this.getIngredients(ingredient)).join("")}
                        </ul>
                    </div>
                    <div class="thumbnail-body-recipe">
                        <p>${this.description} </p>
                    </div>
                </div>
              </article>
        `;

    return recipeCard;
  }

  getIngredients(ingredients) {
    
    let ingredientDOM = `<li><span>${ingredients.ingredient}</span>`
    if (ingredients.quantity) {
      ingredientDOM += ' : ' + ingredients.quantity + '  '
    }
    if(ingredients.unit) {
      ingredientDOM += ingredients.unit
    }
    ingredientDOM += `</li>`

    return ingredientDOM
   
  }
}
