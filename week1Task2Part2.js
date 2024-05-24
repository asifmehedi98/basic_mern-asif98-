
// const prompt= require("prompt-sync") ();

let weight = prompt("Enter your weiht(in kg).");
let height = prompt("Enter height(in meter).");

let bmi = weight/(height**2);
// let bmi = prompt("enter bmi")
console.log("BMI is " + bmi)

if(bmi<18.5){
    console.log("Underweight.")
}
else if(bmi<=24.9){
    console.log("You are nomal.")
}
else if(bmi<=29.9){
    console.log("You are overweight.")
}
else{
    console.log("You are obese.")
}