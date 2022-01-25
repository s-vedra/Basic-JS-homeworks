let toDoInput = document.getElementById("toDoInput");
let addButton = document.getElementById("addBtn");
let listUl = document.getElementById("list");

let toDoList = [];
let createObject = (name, isCompleted, array) => {
  let list = {
    name: name,
    isCompleted: isCompleted,
  };
  array.push(list);
  console.log(array);
};

let unorderedList = (element, name) => {
  if (name.length < 2) {
    alert("Wrong input");
  } else {
    let li = document.createElement("li");
    let text = document.createTextNode(`${name}`);
    let span = document.createElement("span");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    span.appendChild(text);
    li.appendChild(span);
    checkbox.addEventListener("click", function () {
      createObject(toDoInput.value, true, toDoList);
    });
    element.appendChild(li);
    resetList();
  }
};

addButton.addEventListener("click", function () {
  unorderedList(listUl, toDoInput.value);
});

let resetList = () => {
  toDoInput.value = "";
};
