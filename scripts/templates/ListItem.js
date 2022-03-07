class ListItem {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.servings = recipe.servings;
    this.ingredients = recipe.ingredients;
    this.appliance = recipe.appliance;
    this.ustensils = recipe.ustensils;
  }

  createIngredientsList() {
    const ingredientsList = this.ingredients
      .map((ingredient) => this.getIngredients(ingredient))
      .join("");

    return ingredientsList;
  }

  createAppliancesList() {
    const appliancesList = `<li>${this.appliance}</li>`;
    return appliancesList;
  }

  createUstensilsList() {
    const ustensilssList = this.ustensils.map(ustensil => this.getUstensils(ustensil)).join("")
    return ustensilssList
  }

  getIngredients(ingredients) {
    let ingredientDOM = `<li>${ingredients.ingredient}</li>`;

    return ingredientDOM;
  }

  getUstensils(ustensils) {
    let ustensilsDOM = `<li>${ustensils}</li>`

    return ustensilsDOM
  }
}
