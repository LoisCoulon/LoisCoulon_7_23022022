class ItemFactory {
    constructor(recipes) {
      this.recipes = recipes;
    }
  
    createItems() {
      let ingredientsDom = "";
      let appliancesDom = "";
      let ustensilsDOM = "";

      let ingredientsList = []
      let appliancesList = []
      let ustensilsList = []


      for (let index = 0; index < this.recipes.length; index++) {
        const element = this.recipes[index];
        element.ingredients.map(ingredient=> ingredientsList.push(ingredient.ingredient.toLowerCase()))
        appliancesList.push(element.appliance.toLowerCase())
        element.ustensils.map(ustensil=> ustensilsList.push(ustensil.toLowerCase()))
      }
      const setIngredientList = ([...new Set(ingredientsList)])
      const setAppliancesList = ([...new Set(appliancesList)])
      const setUstensilsList = ([...new Set(ustensilsList)])

      const ingredient = new ListItem(setIngredientList);
      const appliance = new ListItem(setAppliancesList);
      const ustensil = new ListItem(setUstensilsList);

      ingredientsDom += ingredient.createIngredientsList();
      appliancesDom += appliance.createAppliancesList();
      ustensilsDOM += ustensil.createUstensilsList()

      document.querySelector(".ingredients .ingredients-list").innerHTML = ingredientsDom;
      document.querySelector(".appliances .appliances-list").innerHTML = appliancesDom;
      document.querySelector(".ustensils .ustensils-list").innerHTML = ustensilsDOM;
    }
  }
  