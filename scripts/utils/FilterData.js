class FilterData {
  constructor(recipes) {
    this.searchBar = document.querySelector(".search-bar");
    this.recipes = recipes;
  }

  filterData() {
    this.searchBar.addEventListener("input", (e) => {
      let value = e.target.value.toLowerCase();

      if (value.length >= 3) {
        const filteredArray = [];
        for (let index = 0; index < this.recipes.length; index++) {
          const recipe = this.recipes[index];
          if (recipe.name.toLowerCase().includes(value)) {
            filteredArray.push(recipe);
          }
        }
        new RecipeFactory(filteredArray).createRecipes();
      } else {
        new RecipeFactory(this.recipes).createRecipes();
      }
    });
  }
}
