#! /usr/bin/env node
import inquirer from "inquirer";
// Printing a Welcome Message
console.log("\n\tWelcome To \`CodeWithOwaisKhan\` - CLI Simple Calculator\n");
// Asking Questions from Users through inquirer
let answers = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter Your Second Number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Selcet one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// conditional estatments if-else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Substraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else
    (console.log("Invalid Input"));
