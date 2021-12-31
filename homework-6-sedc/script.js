//empty array
let arrayStory = [];
//function to get strings in the array and display the message
function tellStory(array) {
  let position = 1;
  for (i = 0; i < 3; i++) {
    array[i] = prompt(`Enter value for position ${position}`);
    position++;
  }
  console.log(
    `This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day. The end`
  );
}
//call the function
console.log(tellStory(arrayStory));
