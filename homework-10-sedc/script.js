//arrays with first and last names
let firstName = ["Bob", "John", "Hugo", "Bruno"];
let lastName = ["Dylan", "Mayer", "Boss", "Mars"];

//function to concatenate elements from different arrays
function fullName(name, surname) {
  let result = [];
  let number = 1;
  if (firstName.length != lastName.length) {
    alert("The lengths don't match");
    return [];
  } else {
    for (i = 0; i < name.length; i++) {
      result.push(number + ". " + name[i].concat(" ", surname[i]));
      number++;
    }
    return result;
  }
}

//call the function
console.log(fullName(firstName, lastName));
