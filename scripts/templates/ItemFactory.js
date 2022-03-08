class ItemFactory {
  constructor(recipes) {
    this.recipes = recipes;
    this.newTag()
  }

  createItems() {
    let ingredientsDom = "";
    let appliancesDom = "";
    let ustensilsDOM = "";

    let ingredientsList = [];
    let appliancesList = [];
    let ustensilsList = [];

    for (let index = 0; index < this.recipes.length; index++) {
      const element = this.recipes[index];
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
