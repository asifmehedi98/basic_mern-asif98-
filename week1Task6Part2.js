let ticket = 800

let age = prompt("Enter your age if you are nor student. Enter 'Student' if you are a student")

if(age<10){
    ticket = ticket*0 
}
else if(age>=60){
    ticket = ticket*0.85
}
else if (age == "Student"){
    ticket = ticket *0.5
}

console.log("Your ticket price is " + ticket)