// const Prompt = require("prompt-sync") ();

let myScore = Number(prompt("Enter my score."))


if(myScore>=80){
    let friendScore = Number(prompt("Enter score of my friend."))
    if(friendScore>=80){
        console.log("Go for lunch with my friend.")
    }
    else if(friendScore<80 && friendScore>=60){
        console.log("Goodluck next time my friend.")
    }
    else if(friendScore<60 && friendScore>=40){
        console.log("Friend's message unseen.")
    }
    else{
        console.log("Block my friend.")
    }
}
else{
    console.log("Sleep and act sad.")
}