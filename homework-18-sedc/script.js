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
    {
      title: "The Robots of dawn",
      author: "Isaac Asimov",
      readingStatus: true,
    },
    //not read books
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      readingStatus: false,
    },
  ];
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

//function to validate input, create an object and push it into the empty array
function books(ul, title, author, readingStatus) {
  if (title.length <= 1 || author.length <= 1) {
    alert("Wrong input");
  } else {
    library.push({
      title: title,
      author: author,
      readingStatus: readingStatus,
    });
    let li = document.createElement("li");
    if (readingStatus) {
      textElement = document.createTextNode(
        `Already read ${title} by ${author}`
      );
    } else {
      textElement = document.createTextNode(
        `You still need to read ${title} by ${author}`
      );
    }
    li.appendChild(textElement);
    ul.appendChild(li);
    console.log(library);
  }
}

//button to call the function
yesButton.addEventListener("click", function () {
  books(read, title.value, author.value, true);
  title.value = "";
  author.value = "";
});
//button to call the function
noButton.addEventListener("click", function () {
  books(notRead, title.value, author.value, false);
  title.value = "";
  author.value = "";
});
