import { recipes } from "../data/recipes.js";

class App {
  constructor(recipes) {
    this.recipes = recipes;
  }

  async main() {
    const recipeFactory = new RecipeFactory(this.recipes);
    const itemFactory = new ItemFactory(this.recipes);
    const filterData = new FilterData(recipeFactory, itemFactory, this.recipes);
    filterData.filterData();
  }
}

const app = new App(recipes);
app.main();
