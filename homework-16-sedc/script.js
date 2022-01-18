//getting the elements from the HTML
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let studentAge = document.getElementById("age");
let myButton = document.getElementById("button");
let lists = document.getElementsByTagName("ul")[0];

//emtpy array
const students = [];

//function to create a student object and push it into the array
function addStudent(array) {
  student = {
    name: firstName.value,
    lastName: lastName.value,
    age: studentAge.value,
  };
  firstName.value = "";
  lastName.value = "";
  age.value = "";
  //validating the input
  if (student.name.length < 2 || student.lastName.length < 2) {
    alert("Wrong input");
  } else {
    array.push(student);
    student.printStudents = printStudents;
    student.printStudents(lists);
  }
  console.log(array);
  return array;
}

//function to print out the students in an unordered list
function printStudents(element) {
  let li = document.createElement("li");
  let liText = document.createTextNode(
    `Full name: ${this.name} ${this.lastName} Age:${this.age}`
  );
  li.appendChild(liText);
  element.appendChild(li);
}

//button which calls the function to create the object and pushes it into the array
myButton.addEventListener("click", function () {
  addStudent(students);
});
