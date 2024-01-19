import { prompt } from "./prompt.js";


let userChoice;
let attempts = 0;
const targetNumber = Math.floor(Math.random()*100+1);
console.log(targetNumber);

while (userChoice !== targetNumber){

    const userChoice = Number(prompt("Guess the mystery number: "));
    attempts++;

    if (userChoice === "" || isNaN(userChoice) || userChoice < 0 || userChoice > 100){
        console.log("Enter a valid number between 0 and 100");
        continue;
    }else if (userChoice > targetNumber) {
        console.log("Target number is smaller");
    }else if (userChoice < targetNumber) {
        console.log("Target number is bigger");
    }else{
        console.log(`You found it in ${attempts} attempts! Yes, it was ${targetNumber}!`)
        break
    }
    
}

