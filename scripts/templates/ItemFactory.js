class ItemFactory {
    constructor(recipes) {
      this.recipes = recipes;
    }
  
    createItems() {
      let ingredientsDom = "";
      let appliancesDom = "";
      let ustensilsDOM = "";

      this.recipes.forEach((recipe) => {
        const template = new ListItem(recipe);
        ingredientsDom += template.createIngredientsList();
        appliancesDom += template.createAppliancesList();
        ustensilsDOM += template.createUstensilsList()
      });
      document.querySelector(".ingredients .ingredients-list").innerHTML = ingredientsDom;
      document.querySelector(".appliances .appliances-list").innerHTML = appliancesDom;
      document.querySelector(".ustensils .ustensils-list").innerHTML = ustensilsDOM;
    }
  }
  