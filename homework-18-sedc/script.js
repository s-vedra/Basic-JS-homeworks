let title = document.getElementById("title");
let author = document.getElementById("author");
let yesButton = document.getElementsByTagName("button")[0];
let noButton = yesButton.nextElementSibling;
let read = document.getElementById("readBooks");
let notRead = document.getElementById("notReadBooks");

function displayBooks() {
  let books = [
    (a = {
      title: "The Robots of dawn",
      author: "Isaac Asimov",
    }),
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

displayBooks();

//Bonus
const library = [];
function readBooks(array) {
  books = {
    title: title.value,
    author: author.value,
  };
  if (books.title.length <= 1 || books.author.length <= 1) {
    alert("Wrong input");
  } else {
    array.push(books);
    books.firstAnswer = firstAnswer;
    books.firstAnswer(read);
  }
  console.log(array);
  return [];
}

function notReadBooks(array) {
  books = {
    title: title.value,
    author: author.value,
  };
  if (books.title.length <= 1 || books.author.length <= 1) {
    alert("Wrong input");
  } else {
    array.push(books);
    books.secondAnswer = secondAnswer;
    books.secondAnswer(notRead);
  }
  console.log(array);
  return [];
}

function firstAnswer(ul) {
  this.readingStatus = true;
  let lists = document.createElement("li");
  let textList = document.createTextNode(
    `Already read ${this.title} by ${this.author}`
  );
  lists.appendChild(textList);
  ul.appendChild(lists);
}

function secondAnswer(ul) {
  this.readingStatus = false;
  let lists = document.createElement("li");
  let textList = document.createTextNode(
    `You still need to read ${this.title} by ${this.author}`
  );
  lists.appendChild(textList);
  ul.appendChild(lists);
}

yesButton.addEventListener("click", function () {
  readBooks(library);
});
noButton.addEventListener("click", function () {
  notReadBooks(library);
});
