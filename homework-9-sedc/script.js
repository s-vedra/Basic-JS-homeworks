//emtpy array
let numberArray = [];
//for loop for pushing numbers in the array
for (i = 1; i <= 20; i++) {
  numberArray.push(i);
  //if numbers are even add a new line
  if (i % 2 == 0) {
    console.log(`${i}\n`);
    //if numbers are odd add empty space " "
  } else if (i % 2 !== 0) {
    console.log(`${i} " "`);
  }
}
