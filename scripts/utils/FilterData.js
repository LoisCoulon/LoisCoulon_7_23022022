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
      }
    });
  }
}
