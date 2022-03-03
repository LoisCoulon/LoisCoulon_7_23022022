const selectIngredient = document.querySelector(".ingredients");
const selectAppliances = document.querySelector(".appliances");
const selectUstensils = document.querySelector(".ustensils");

function dropdown(element) {
  element.addEventListener("click", function () {
    const input = element.firstElementChild

    if (element.classList.length > 1) {
      element.classList.remove(element.classList.item(1));
      input.setAttribute("placeHolder", input.name) 
    } else {
      const selector = element.className;
      element.classList.add(selector + "-active");
      input.setAttribute("placeHolder", input.ariaLabel) 
    }
  });
}
dropdown(selectIngredient);
dropdown(selectAppliances);
dropdown(selectUstensils);
