//what do we want to find the type of
let userInput = prompt("Enter value");

//function to find the value's type
function findType(type) {
  if (type == "null") {
    return typeof null;
  } else if (type == "string") {
    return typeof "";
  } else if (type == "true" || type == "false") {
    return typeof true;
  } else if (type == "") {
    return typeof undefined;
  } else if (type == "NaN") {
    return typeof NaN;
  }
}

//calling the function
console.log(findType(userInput));
