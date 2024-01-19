import { prompt } from "./prompt.js";

// const test = prompt("ceci est un test");

const question = prompt("Guess the mystery number: ");

const mysteryNumber = Math.floor(Math.random()*100+1);
console.log(mysteryNumber);

