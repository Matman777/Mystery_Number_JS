import { prompt } from "./prompt.js";


let reloadGame = true;

do {

    let targetNumber = Math.floor(Math.random()*100+1);
    console.log(targetNumber);
    let attempts = 0;
    let userChoice;

        while (userChoice !== targetNumber){

            userChoice = Number(prompt("Guess the mystery number: "));
            attempts++;

            if (userChoice === "" || isNaN(userChoice) || userChoice < 0 || userChoice > 100){
                console.log("Enter a valid number between 0 and 100");
                continue;
            }else if (userChoice > targetNumber) {
                console.log("Target number is smaller");
            }else if (userChoice < targetNumber) {
                console.log("Target number is bigger");
            }else{
                console.log(`Yes, it was ${targetNumber}! You found it in ${attempts} attempts!`);
            }
                
        }
        let validResponse = false;
            while (!validResponse) {
                reloadGame = prompt("Another game? Enter 'y' for Yes and 'n' for No: ").toLowerCase();

                if (reloadGame === "y" || reloadGame === "n") {
                    validResponse = true;
                } else {
                    console.log("Please enter 'y' for Yes or 'n' for No.");
                }
            }
    } while (reloadGame === "y");

