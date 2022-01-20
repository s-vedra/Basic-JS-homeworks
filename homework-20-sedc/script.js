//getting the inputs from HTML
let userInput = $("input");
let myButton = $("#myButton");

//function to generate the style and text of the heading
function displayName(input) {
  if (
    input[0].value.length < 1 ||
    input[1].value.length < 1 ||
    !CSS.supports("color", input[1].value)
  ) {
    alert("Wrong input");
  } else {
    input.css("borderBottom", `2px solid ${input[1].value}`);
    myButton.css("backgroundColor", input[1].value);
    $("h1").text(`${input[0].value}`).css("color", input[1].value);
  }
  input[0].value = "";
  input[1].value = "";
}

//button to call the function
myButton.on("click", function () {
  displayName(userInput);
});
