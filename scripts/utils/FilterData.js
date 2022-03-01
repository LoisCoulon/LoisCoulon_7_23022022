class FilterData {
  constructor(recipes) {
    this.searchBar = document.querySelector(".search-bar");
    this.recipes = recipes;
  }

  filterData() {
    this.searchBar.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();

      if(value.length >= 3) {
        const filteredArray = this.recipes.filter(recipe => recipe.name.toLowerCase().includes(value))
        new RecipeFactory(filteredArray).createRecipes()
      } else {
        new RecipeFactory(this.recipes).createRecipes()
      }
    })
  }
}
   
