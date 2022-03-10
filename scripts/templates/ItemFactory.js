class ItemFactory {
  constructor() {
    this.newTag()
  }

  createItems(recipe) {
    let ingredientsDom = "";
    let appliancesDom = "";
    let ustensilsDOM = "";

    const ingredient = this.itemArray(recipe).ingredient
    const appliance = this.itemArray(recipe).appliance
    const ustensil = this.itemArray(recipe).ustensil

    ingredientsDom += ingredient.createIngredientsList();
    appliancesDom += appliance.createAppliancesList();
    ustensilsDOM += ustensil.createUstensilsList();

    document.querySelector(".ingredients .ingredients-list").innerHTML =
      ingredientsDom;
    document.querySelector(".appliances .appliances-list").innerHTML =
      appliancesDom;
    document.querySelector(".ustensils .ustensils-list").innerHTML =
      ustensilsDOM;
  }

  itemArray(recipe) {
    let ingredientsList = [];
    let appliancesList = [];
    let ustensilsList = [];

    for (let index = 0; index < recipe.length; index++) {
      const element = recipe[index];
      element.ingredients.map((ingredient) =>
        ingredientsList.push(ingredient.ingredient.toLowerCase())
      );
      appliancesList.push(element.appliance.toLowerCase());
      element.ustensils.map((ustensil) =>
        ustensilsList.push(ustensil.toLowerCase())
      );
    }
    const setIngredientList = [...new Set(ingredientsList)];
    const setAppliancesList = [...new Set(appliancesList)];
    const setUstensilsList = [...new Set(ustensilsList)];

    const ingredient = new ListItem(setIngredientList);
    const appliance = new ListItem(setAppliancesList);
    const ustensil = new ListItem(setUstensilsList);

    return {ingredient, appliance, ustensil}
  }

  newTag() {
    const ul = document.querySelector("#tags ul")
    document.querySelector(".filters").addEventListener("click", function(e) {
      if (e.target.className === "ingredients-list-item") {
        const ingredient = new Tag().createTag("tags-ingredient", e.target.dataset.set)
        ul.appendChild(ingredient)

      } else if (e.target.className === "appliances-list-item"){
        const appliance = new Tag().createTag("tags-appliance", e.target.dataset.set)
        ul.appendChild(appliance)

      } else if (e.target.className === "ustensils-list-item"){
        const ustensil = new Tag().createTag("tags-ustensil", e.target.dataset.set)
        ul.appendChild(ustensil)
      }
    })
  }

}
