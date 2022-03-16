class ListItem {
  constructor(data) {
    this.ingredients = data;
    this.appliances = data;
    this.ustensils = data;
  }

  createIngredientsList() {
    let ingredientsList = ``
    this.ingredients.forEach(ingredient => {
      ingredientsList += `<li class="ingredients-list-item" data-set="${ingredient}">${ingredient}</li>`;
    });
    return ingredientsList;
  }

  createAppliancesList() {
    let appliancesList = ``
    this.appliances.forEach(appliance => {
      appliancesList += `<li class="appliances-list-item" data-set="${appliance}">${appliance}</li>`;
    });
    return appliancesList;
  }

  createUstensilsList() {
    let ustensilsList = ``
    this.ustensils.forEach(ustensil=> {
      ustensilsList += `<li class="ustensils-list-item" data-set="${ustensil}">${ustensil}</li>`
    })
    return ustensilsList
  }
  
}
