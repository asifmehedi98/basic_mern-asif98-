// const Prompt = require("prompt-sync") ();

let num1 = Number(prompt("Enter 1st number."))
let num2 = Number(prompt("Enter 2nd number."))
let result = 0

num1>num2
? result = num1**2
: result = num1+num2

console.log(result)