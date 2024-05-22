console.log("Hello From........ asif_class1.js");


// ---------    Task 1

var customer = Number(prompt("Enter how much money do you have"));
var orange = Number(prompt("Enter value of orange per kilo"));
var apple = Number(prompt("Enter value of apple per kilo"));
var orange_kg = Number(prompt("How much kg of Orange Customer need?"));
var apple_kg = Number(prompt("How much kg of Apple Customer need?"));

console.log("Customer's money is "+ customer + " Taka");
console.log("Orange per kilo "+ orange + " Taka.");
console.log("Apple per kilo "+ apple + " Taka.");
var sum = apple_kg*apple + orange_kg*orange;
var return_money = customer - (apple_kg*apple + orange_kg*orange);

console.log("Total product cost is "+ sum + " Taka" );
console.log("Customer will get " + return_money + " Taka");
