//money in account
const accountMoney = 6000;
//asking user how much money they want to withdraw
let withdrawMoney = parseInt(prompt("How much money do you want to withdraw?"));

//function to validate input and give back the current balance
function atmMachine(account, withdraw) {
  if (withdraw > account) {
    alert("You don't have enough money in your account");
  } else if (isNaN(withdraw)) {
    alert("Enter valid input");
  } else {
    account -= withdraw;
    return account;
  }
}

//calling the function and printing it in the console
console.log(
  `You just withdraw \$${withdrawMoney} and your current balance is \$${amountMoney(
    accountMoney,
    withdrawMoney
  )}`
);
