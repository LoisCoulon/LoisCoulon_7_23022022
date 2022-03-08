class Tag {
  constructor() {}

  createTag(classname, itemName) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.className = classname;
    li.textContent = itemName;
    img.src = "./public/images/cross.png";
    img.alt = "cross item";
    img.setAttribute("onclick", "return this.parentNode.remove();");
    li.appendChild(img);
    return li;
  }
}
