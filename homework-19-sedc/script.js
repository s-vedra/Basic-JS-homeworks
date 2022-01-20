//get elements from HTML
let myButton = $("#button").first();
let userInput = $("input");

//function to display a greeting message to the user
function greetingMessage(input) {
  if (input.val().length <= 2) {
    alert("Input your name");
  } else {
    $("h1").first().text(`Hello ${input.val()}!`).css("color", "red");
    input.val("");
  }
}

//button to call the function
myButton.on("click", function () {
  greetingMessage(userInput);
});
