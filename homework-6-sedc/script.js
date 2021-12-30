let arrayStory = [];
function tellStory() {
  let position = 1;
  for (i = 0; i < 3; i++) {
    arrayStory[i] = prompt(`Enter value for position ${position}`);
    position++;
  }
  console.log(
    `This is ${arrayStory[0]}. ${arrayStory[0]} is a nice person. Today they are ${arrayStory[1]}. They are ${arrayStory[2]} all day. The end`
  );
}
tellStory();
console.log(arrayStory);
