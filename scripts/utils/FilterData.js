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
    // this.filterIngredients(this.recipes)
    // this.filterIngredientsOnClick(this.recipes)
    // this.filterUstensils(this.recipes)
    // this.filterAppliances(this.recipes)
    // this.filterApplianceOnClick(this.recipes)
    // this.filterUstensilOnClick(this.recipes)
  }

  filterData() {
    this.searchBar.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();
      let filteredArrayName = this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(value)
      );
      let filteredArrayDescription = this.recipes.filter((recipe)=> 
      recipe.description.toLowerCase().includes(value)
      );
      let filteredArrayIngredient = this.recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) => {
       return ingredient.ingredient.toLowerCase().includes(value) 
      })  
      );

      const res1 = filteredArrayDescription.filter((el1) => !filteredArrayName.find(el2 => el1.id === el2.id))
      for(const result1 in res1) {
        filteredArrayName.push(res1[result1])
      }
      const res2 = filteredArrayIngredient.filter((el1) => !filteredArrayName.find(el2 => el1.id === el2.id))
      for(const result2 in res2) {
        filteredArrayName.push(res2[result2])
      }
      const filteredResult = filteredArrayName 

      if (value.length >= 3) {
        this.recipeFactory.createRecipes(filteredResult);
        this.itemFactory.createItems(filteredResult);
        this.filterApplianceOnClick(filteredResult)
        this.filterUstensilOnClick(filteredResult)
      } else {
        this.recipeFactory.createRecipes(this.recipes);
        this.itemFactory.createItems(this.recipes)
      }
    });
    //filtrage des tags des appareils
    const applianceInput = document.querySelector(".appliances input")
    applianceInput.addEventListener("input", (e) => {
      this.filterAppliances(this.recipes, e)
    });
    // filtrage des recettes par appareil
    this.filterApplianceOnClick(this.recipes)

    //filtrage des tags des ustensils
    const ustensilInput = document.querySelector(".ustensils input")
    ustensilInput.addEventListener("input", (e) => {
      this.filterUstensils(this.recipes, e)
    })
    // filtrage des recettes par ustensil
    this.filterUstensilOnClick(this.recipes)

    //filtrage des tags des ingredients
    const ingredientInput = document.querySelector(".ingredients input")
    ingredientInput.addEventListener("input", (e) => {
      this.filterIngredients(this.recipes, e)
    });

    // filtrage des recettes par ingredient
    this.filterIngredientsOnClick(this.recipes)
  }

  filterIngredients(recipes, e) {
    // On récupère le tableau des ingédients filtré (retourne seulement un tableau filtré)
    let value = e.target.value.toLowerCase();
    if (value.length > 0) {
      const data = recipes.filter((recipe) =>
        recipe.ingredients.some((ingredient) => {
          return ingredient.ingredient.toLowerCase().includes(value) 
        })  
      )
      this.itemFactory.createItems(data);
      this.filterIngredientsOnClick(data);
    } else {
      this.itemFactory.createItems(recipes);
    }
  }

  filterIngredientsOnClick(recipes) {
    // filtrage des ingredients au clic
    document.querySelectorAll(".search-section .filters .ingredients-list li").forEach(li => 
      li.addEventListener("click", (e) => {
        let value = e.target.dataset.set;
        const data = recipes.filter((recipe) =>
          recipe.ingredients.some((ingredient) => {
            return ingredient.ingredient.toLowerCase().includes(value) 
          })
        ) 
        this.itemFactory.createItems(data);
        this.recipeFactory.createRecipes(data);
      })
    )
    
  }

  filterAppliances(recipes, e) {
    // recherche du tag
    let value = e.target.value.toLowerCase();
    console.log(value)
    if (value.length > 0) {
      const data = recipes.filter((recipe) =>
      recipe.appliance.toLowerCase().includes(value))
      this.itemFactory.createItems(data);
      this.filterApplianceOnClick(data)
    } else {
    this.itemFactory.createItems(recipes);
    }
  }

  filterApplianceOnClick(recipes) {
    // filtrage des recettes par appareil au clic
    document.querySelectorAll(".search-section .filters .appliances-list li").forEach(li => 
      li.addEventListener("click", (e) => {
        let value = e.target.dataset.set;
        const data = recipes.filter((recipe) => 
        recipe.appliance.toLowerCase().includes(value)
        )
        this.itemFactory.createItems(data);
        this.recipeFactory.createRecipes(data);
      })
    )
  }

  filterUstensils(recipes, e) {
 
    let value = e.target.value.toLowerCase();
    if (value.length > 0) {

      const data = recipes.filter((recipe) => 
        recipe.ustensils.some(ustensil => {
          return ustensil.toLowerCase().includes(value)
        })
      )
      console.log(data)
      this.itemFactory.createItems(data);
      this.filterUstensilOnClick(data)
    } else {
    this.itemFactory.createItems(recipes);
    }
  }

  filterUstensilOnClick(recipes) {
    document.querySelectorAll(".search-section .filters .ustensils-list li").forEach(li => 
      li.addEventListener("click", (e) => {
        let value = e.target.dataset.set;
        const data = recipes.filter((recipe) => 
          recipe.ustensils.some(ustensil => {
            return ustensil.toLowerCase().includes(value)
          })
        )
        this.itemFactory.createItems(data);
        this.recipeFactory.createRecipes(data);
      })
    )
    
  }
}
