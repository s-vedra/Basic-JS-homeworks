//function to find the value's type
function findType(input) {
  return typeof input;
}

//calling the function and input
console.log(findType(null));
console.log(findType(undefined));
console.log(findType("string"));
console.log(findType(true));
console.log(findType(5));
