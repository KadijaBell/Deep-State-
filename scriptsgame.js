console.log("Sanity Check2"); 


function deepState (questions){
    this.score = 0;
    this.questions = questions;
}


//Questions
let gameQuestions =[{

        questions: "What color is right?",
        answerChoices: ["red", "blue", "green", "orange"],
        correctAnswer: "red",

    },

    {

    question: "Whats your favorite number?",
    answerChoices:["3", "5","7","9"],
    correctAnswer: "5",

    },

    {


        question: "How many days of the week?",
        answerChoices:["0","7","4","1"],
        correctAnswer: "7",

    },

    {



        question: "Yellow is a primary color",
        answerChoices:["True", "False"],
        correctAnswer: "True",


}];


//gameplay function 
let playerScore = 20;
let totalQuestions = 4;


enterDeepState = () => {
    score = 0;
    levelCounter = 0;
    questionBank = [gameQuestions];
}
 enterDeepState();


 //buttons
 Array.from(document.getElementsByClassName("btn-answer")).forEach(button => {
   button.addEventListener("click", function (event){
      //if statments for correct and incorrect answer
      console.log(event.target.dataset.correct)
   })  
 });


//Winning Conditions
//Wrong Answer
//PictureTransitions 
