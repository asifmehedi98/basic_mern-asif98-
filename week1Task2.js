// --------     Task 2
const prompt= require("prompt-sync") ();


var sum = 0;
var marks ;
for (let i=1; i<6; i++)
    {
        // marks = prompt(Number("Enter " + i + " subject mark"));
        switch (i) {
            case 1:
                sum = sum + Number(prompt("Enter " + i + "st subject mark"));
                break;
            case 2:
                sum = sum + Number(prompt("Enter " + i + "nd subject mark"));
                break;
            case 3:
                sum = sum + Number(prompt("Enter " + i + "rd subject mark"));
                break;
            default:
                sum = sum + Number(prompt("Enter " + i + "th subject mark"));
                break;
        // sum = sum + Number(prompt("Enter " + i + "st subject mark"));
        }
    }

var avg = sum/5;
console.log("Total number is " + sum);
console.log("Average number is " + avg);
