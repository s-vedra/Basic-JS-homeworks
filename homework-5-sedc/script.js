//money in account
const accountMoney = 6000;
//asking user how much money they want to withdraw
let withdrawMoney = parseInt(prompt("How much money do you want to withdraw?"));

//validating input and checking to see if they have enough money in their account
if (withdrawMoney > accountMoney) {
  alert("You don't have enough money in your account");
} else if (isNaN(withdrawMoney)) {
  alert("Enter valid input");
} else {
  function atmMachine(account, withdraw) {
    account -= withdraw;
    return account;
  }
}

//calling the function and printing it in the console
console.log(
  `You just withdraw \$${withdrawMoney} and your new balance is \$${atmMachine(
    accountMoney,
    withdrawMoney
  )}`
);
