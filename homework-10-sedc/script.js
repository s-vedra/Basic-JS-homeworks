let firstName = ["Bob", "John", "Hugo", "Bruno"];
let lastName = ["Dylan", "Mayer", "Boss", "Mars"];

function fullName(name, surname) {
  let result = [];
  let number = 1;
  for (i = 0; i < name.length; i++) {
    result.push(number + ". " + name[i].concat(" ", surname[i]));
    number++;
  }
  return result;
}

console.log(fullName(firstName, lastName));
