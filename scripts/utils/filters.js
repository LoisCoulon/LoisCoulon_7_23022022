const selectIngredient = document.querySelector(".ingredients");
const selectAppliances = document.querySelector(".appliances");
const selectUstensils = document.querySelector(".ustensils");

function openDropDown(element) {
  const input = element.firstElementChild;
  const selector = element.className;
  element.classList.add(selector + "-active");
  input.setAttribute("placeHolder", input.ariaLabel);
}

function closeDropDown(element) {
  const input = element.firstElementChild;
  element.classList.remove(element.classList.item(1));
  input.setAttribute("placeHolder", input.name);
}

function dropdown(element) {
  window.addEventListener("click", function (e) {
    if (element.contains(e.target) && element.classList.length === 1) {
      openDropDown(element);
    } else if (!element.contains(e.target) && element.classList.length > 1) {
      closeDropDown(element);
    } else if(e.target.classList.contains("fa-angle-down")) {
      closeDropDown(element);
    } else if (element.contains(e.target) && element.classList.length > 1) {
    } else {
    }
  });
}

dropdown(selectIngredient);
dropdown(selectAppliances);
dropdown(selectUstensils);
