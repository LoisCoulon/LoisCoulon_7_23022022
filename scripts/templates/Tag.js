class Tag {
  constructor() {}

  createTag(classname, itemName) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.className = classname;
    li.textContent = itemName;
    img.src = "./public/images/cross.png";
    img.className = "closeTag"
    img.alt = "cross item";
    li.appendChild(img);
    return li;
  }

  removeTag(tag) {
    tag.style.display = 'none'
  }
}

