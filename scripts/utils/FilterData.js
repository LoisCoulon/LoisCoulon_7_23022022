class FilterData {
  constructor(recipeFactory, itemFactory, recipes) {
    this.recipeFactory = recipeFactory;
    this.itemFactory = itemFactory;
    this.searchBar = document.querySelector(".search-bar");
    this.recipes = recipes;
    this.init();
  }

  init() {
    this.recipeFactory.createRecipes(this.recipes);
    this.itemFactory.createItems(this.recipes);
    this.filterAppliances()
    this.filterIngredients()
    this.filterUstensils()
  }

  filterData() {
    this.searchBar.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();

      if (value.length >= 3) {
        const filteredArray = this.recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(value)
        );
        this.recipeFactory.createRecipes(filteredArray);
        this.itemFactory.createItems(filteredArray);
      } else {
        this.recipeFactory.createRecipes(this.recipes);
        this.itemFactory.createItems(this.recipes)
      }
    });
  }

  filterIngredients() {
    // On récupère le tableau des ingédients filtré (retourne seulement un tableau filtré)
    const ingredientInput = document.querySelector(".ingredients input")
    ingredientInput.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();

      let filteredArray = []
      this.recipes.filter((recipe) => {
        recipe.ingredients.filter((ingredient) =>{
          if(ingredient.ingredient.toLowerCase().includes(value)) {
            filteredArray.push(ingredient.ingredient)
          }
        })
      })   
      console.log(filteredArray)
    });
  }

  filterAppliances() {
    // recherche du tag
    const applianceInput = document.querySelector(".appliances input")
    applianceInput.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();
      if (value.length > 0) {
        const data = this.recipes.filter((recipe) =>
        recipe.appliance.toLowerCase().includes(value))
        this.itemFactory.createItems(data);
      } else {
      this.itemFactory.createItems(this.recipes);
      }
    });    

    // filtrage des recettes par appareil au clic
    document.querySelectorAll(".search-section .filters .appliances-list li").forEach(li => 
      li.addEventListener("click", (e) => {
        let value = e.target.dataset.set;
        const data = this.recipes.filter((recipe) =>
        recipe.appliance.toLowerCase().includes(value))
        this.itemFactory.createItems(data);
        this.recipeFactory.createRecipes(data);
      })
    )
  }

  // On récupère le tableau des ustensils filtré (retourne seulement un tableau filtré)
  filterUstensils() {
    const ustensilInput = document.querySelector(".ustensils input")
    ustensilInput.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();
      let filteredArray = []
      this.recipes.filter((recipe) => {
        recipe.ustensils.filter((ustensil) =>{
          if(ustensil.toLowerCase().includes(value)) {
            filteredArray.push(ustensil)
          }
        })
      })   
      console.log(filteredArray)
    })
  }



}
