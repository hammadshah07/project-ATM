#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 7890;

let PinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin code",
    type: "number",
  },
]);

if (PinAnswer.pin === myPin) {
  console.log("Correct pin code!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Select an option",
      type: "list",
      choices: ["withdraw", "check balance", "past cash"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "Select the cash",
        type: "number",
      },
    ]);

    if (amountAnswer.amount <= myBalance) {
      myBalance -= amountAnswer.amount;
      console.log("Your remaining balance is: " + myBalance);
    } else {
      console.log("Insufficient funds. You can only withdraw up to your current balance.");
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`Your remaining balance is ${myBalance}`);
  } else if (operationAns.operation === "past cash") {
    let operatorAns = await inquirer.prompt([
      {
        name: "operator",
        message: "Select your amount",
        type: "list",
        choices: [10000, 20000, 25000, 30000],
      },
    ]);
    if (operatorAns.operator <= myBalance) {
      myBalance -= operatorAns.operator;
      console.log("Your remaining balance is: " + myBalance);
    } else {
      console.log("Insufficient funds. You can only withdraw up to your current balance.");
    }
  } else {
    console.log("Invalid operation.");
  }
} else {
  console.log("Incorrect pin. Please enter the correct PIN.");
}