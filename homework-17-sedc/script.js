//get elements from the HTML
let animalName = document.getElementById("name");
let animalKind = document.getElementById("kind");
let animalMessage = document.getElementById("message");
let text = document.getElementsByClassName("container")[1];
let myButton = document.getElementById("button");

//function to create the object
function yourAnimal() {
  let animal = {
    name: animalName.value,
    kind: animalKind.value,
  };
  animal.animalSpeak = animalSpeak;
  animal.animalSpeak(text);
}

//the method function for the object
function animalSpeak(element) {
  this.message = animalMessage.value;
  animalName.value = "";
  animalKind.value = "";
  animalMessage.value = "";
  let paragraph = document.createElement("p");
  let paragraphText = document.createTextNode(
    `The ${this.kind} said "${this.message}". It's name is ${this.name}`
  );
  paragraph.appendChild(paragraphText);
  element.appendChild(paragraph);
  console.log(paragraphText);
}

//button to call the function
myButton.addEventListener("click", yourAnimal);
