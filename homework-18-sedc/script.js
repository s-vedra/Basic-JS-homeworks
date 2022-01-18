//get elements from HTML file
let title = document.getElementById("title");
let author = document.getElementById("author");
let yesButton = document.getElementsByTagName("button")[0];
let noButton = yesButton.nextElementSibling;
let read = document.getElementById("readBooks");
let notRead = document.getElementById("notReadBooks");

//array with objects for read and not read books
function displayBooks() {
  //array of objects
  let books = [
    //read books
    (a = {
      title: "The Robots of dawn",
      author: "Isaac Asimov",
    }),
    //not read books
    (b = {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
    }),
  ];
  a.readingStatus = true;
  b.readingStatus = false;
  validateProgress(books, read, notRead);
  console.log(books);
}

//function to iterate through the array and validate the progress whether the books is read or not
function validateProgress(array, ul, ulTwo) {
  for (i = 0; i < array.length; i++) {
    if (array[i].readingStatus) {
      let lists = document.createElement("li");
      let textList = document.createTextNode(
        `Already read ${array[i].title} by ${array[i].author}`
      );
      lists.appendChild(textList);
      ul.appendChild(lists);
    } else {
      let lists = document.createElement("li");
      let textList = document.createTextNode(
        `You still need to read ${array[i].title} by ${array[i].author} `
      );
      lists.appendChild(textList);
      ulTwo.appendChild(lists);
    }
  }
}

//call the function
displayBooks();

//bonus task
//empty array
const library = [];
//function with an object with the read books
function readBooks(array) {
  books = {
    title: title.value,
    author: author.value,
  };
  //validation for the inputs
  if (books.title.length <= 1 || books.author.length <= 1) {
    alert("Wrong input");
  } else {
    array.push(books);
    //add the reading status
    books.firstAnswer = firstAnswer;
    books.firstAnswer(read);
  }
  console.log(array);
  return [];
}

//function with an object with the unread books
function notReadBooks(array) {
  books = {
    title: title.value,
    author: author.value,
  };
  //validation for the inputs
  if (books.title.length <= 1 || books.author.length <= 1) {
    alert("Wrong input");
  } else {
    array.push(books);
    //add the reading status
    books.secondAnswer = secondAnswer;
    books.secondAnswer(notRead);
  }
  console.log(array);
  return [];
}

//function to add a property to the object and display the input in an unordered list
function firstAnswer(ul) {
  this.readingStatus = true;
  let lists = document.createElement("li");
  let textList = document.createTextNode(
    `Already read ${this.title} by ${this.author}`
  );
  lists.appendChild(textList);
  ul.appendChild(lists);
}

//function to add a property to the object and display the input in an unordered list
function secondAnswer(ul) {
  this.readingStatus = false;
  let lists = document.createElement("li");
  let textList = document.createTextNode(
    `You still need to read ${this.title} by ${this.author}`
  );
  lists.appendChild(textList);
  ul.appendChild(lists);
}

//button to call the function
yesButton.addEventListener("click", function () {
  readBooks(library);
});
//button to call the function
noButton.addEventListener("click", function () {
  notReadBooks(library);
});
