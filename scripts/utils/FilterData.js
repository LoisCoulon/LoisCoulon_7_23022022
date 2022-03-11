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
    this.filterIngredients()
    this.filterUstensils(this.recipes)
    this.filterAppliances(this.recipes)
    this.filterApplianceOnClick(this.recipes)
    this.filterUstensilOnClick(this.recipes)
  }

  filterData() {
    this.searchBar.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();
      const filteredArray = this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(value)
    );
      if (value.length >= 3) {
        
        this.recipeFactory.createRecipes(filteredArray);
        this.itemFactory.createItems(filteredArray);
        this.filterApplianceOnClick(filteredArray)
        this.filterUstensilOnClick(filteredArray)
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

  filterAppliances(recipes) {
    // recherche du tag
    const applianceInput = document.querySelector(".appliances input")
    applianceInput.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();

      if (value.length > 0) {
        const data = recipes.filter((recipe) =>
        recipe.appliance.toLowerCase().includes(value))
        this.itemFactory.createItems(data);
        this.filterApplianceOnClick(data)
      } else {
      this.itemFactory.createItems(recipes);
      }
    });    
  }

  filterApplianceOnClick(recipes) {
    // filtrage des recettes par appareil au clic
    document.querySelectorAll(".search-section .filters .appliances-list li").forEach(li => 
      li.addEventListener("click", (e) => {
        let value = e.target.dataset.set;
        const data = recipes.filter((recipe) => 
        recipe.appliance.toLowerCase().includes(value)
        )
        console.log(data)
        this.itemFactory.createItems(data);
        this.recipeFactory.createRecipes(data);
      })
    )
  }

  filterUstensils(recipes) {
    const ustensilInput = document.querySelector(".ustensils input")
    let filteredArray = []

    ustensilInput.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();

      recipes.map((recipe) => {
        recipe.ustensils.forEach((ustensil) =>{
          if(ustensil.toLowerCase().includes(value)) {
            filteredArray.push(ustensil)
          }
        })
      })   
      console.log(filteredArray)
      if (value.length > 0) {

        const data = recipes.filter((recipe) => 
          filteredArray.every(ustensil => {
            return recipe.ustensils.includes(ustensil)
          })
        )
        filteredArray = []      
        this.itemFactory.createItems(data);
        this.filterUstensilOnClick(data)
      } else {
      this.itemFactory.createItems(recipes);
      }
    })
  }

  filterUstensilOnClick(recipes) {
    document.querySelectorAll(".search-section .filters .ustensils-list li").forEach(li => 
      li.addEventListener("click", (e) => {
        let filteredArray = []
        let value = e.target.dataset.set;
        recipes.map((recipe) => {
          recipe.ustensils.forEach((ustensil) =>{
            if(ustensil.toLowerCase().includes(value)) {
              filteredArray.push(ustensil)
            }
          })
        })   
        console.log(filteredArray)
  
        const data = recipes.filter((recipe) => 
          filteredArray.every(ustensil => {
            return recipe.ustensils.includes(ustensil)
          })
        )
        filteredArray = []      
        this.itemFactory.createItems(data);
        this.recipeFactory.createRecipes(data);
      })
    )
  }
}
