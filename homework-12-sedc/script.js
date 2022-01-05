//function to change and validate the input from the user
function changeHeading() {
  let heading = document.getElementById("myTitle");
  let validationText = document.getElementById("validation");
  heading.innerText = prompt("Enter song name");
  //if the user enters the right answer change the color of the text and background color to green and white
  if (heading.innerText === "Billie Jean") {
    heading.style.color = "white";
    heading.style.backgroundColor = "#0B6E4F";
    //adding an extra heading to validate the answer
    validationText.innerText = "Correct!";
    validationText.style.color = "#0B6E4F";
  } else {
    //change the background color and text color to red and white
    heading.style.color = "white";
    heading.style.backgroundColor = "#E71D36";
    validationText.innerText = "Ooops, try again!";
    validationText.style.color = "#E71D36";
  }
}

//get the h1 tags from HTML file and change their value
let headings = document.getElementsByTagName("h1");
headings[0].innerText = "Guess the Song (case sensitive)";
headings[1].innerText = "And mother always told me be careful of who you love";

//get the p tags from the HTML file and change their value
let paragraphs = document.getElementsByTagName("p");
paragraphs[0].innerText = "Who will dance on the floor in the round";
paragraphs[1].innerText = "People always told me be careful of what you do";

//get the text tag from HTML file and change its value
let text = paragraphs[1].nextElementSibling;
text.innerText = "And don't go around breaking young girls' hearts";

//select the last div from the HTML file and get its last child element and change its value
let myDiv = document.getElementsByTagName("div");
let headingThree = myDiv[2].lastElementChild;
headingThree.innerText =
  "And be careful of what you do 'cause the lie becomes the truth";

//add a button in the last div
let addButton =
  (myDiv[2].innerHTML += `<button id = "button">Click me</button>`);
let addText = (myDiv[2].innerHTML += `<h2 id ="validation"></h2>`);

//event listener on the button to call the function
let button = document
  .getElementById("button")
  .addEventListener("click", changeHeading);
