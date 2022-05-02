console.log("Sanity Check")



// let wordList = ["Cat", "Fence", "Paint"];
// function getRandomInt(max) {
// return Math.floor(Math.random() * max);
// }

// let displayWord = ["", "E", "", "", "E"];
// let currentPoints = 0;
// let secretWord = "Fence";
// let maxPoints = 6;
// let guessedLetters = ["J"];


//Game Play

//Function for questions
function deepState (questions){
    this.score = 0;
    this.questions = questions;
}


//Questions
let gameQuestions =[]
//How to win