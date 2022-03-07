class ListItem {
  constructor(data) {
    this.ingredients = data;
    this.appliances = data;
    this.ustensils = data;
  }

  createIngredientsList() {
    let ingredientsList = ``
    this.ingredients.forEach(ingredient => {
      ingredientsList += `<li>${ingredient}</li>`;
    });
    return ingredientsList;
  }

  createAppliancesList() {
    let appliancesList = ``
    this.appliances.forEach(appliance => {
      appliancesList += `<li>${appliance}</li>`;
    });
    return appliancesList;
  }

  createUstensilsList() {
    let ustensilsList = ``
    this.ustensils.forEach(ustensil=> {
      ustensilsList += `<li>${ustensil}</li>`
    })
    return ustensilsList
  }
  
}
