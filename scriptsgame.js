console.log("Sanity Check2"); 


const question = document.getElementById("question")
const answerChoice = Array.from(document.getElementsByClassName ("answer-text"))


let gameQuestions = [];
let levelQuestion = {};
let score = 0;
let totalCount= 0;
let playerAnswer = false;


//Questions
let questions =[{
    
        question: "What color is right?",
        answerChoice: ["red", "blue", "green", "orange"],
        correctAnswer: "red",

    },

    {

        question: "Whats the odd number?",
        answerChoice:["2", "5","4","8"],
        correctAnswer: "5",
    
},

{
    
    
        question: "How many days of the week?",
        answerChoice:["0","7","4","1"],
        correctAnswer: "7",
    
},

{
    
    
    
        question: "Yellow is a primary color",
        answerChoice:["True", "False"],
        correctAnswer: "True",

    
}];

//Score regs
let correct = 20;
let roundQuestions = 4;

enterDeepState = () => {
    score = 0;
    level = 0;
    gameQuestions = [...questions];
    choices = [...answerChoice];
    console.log(choices)
    generateNewQuest();
 }

//will generate a random question each round 
 generateNewQuest = () => {
    level++;
    let gamePlay = Math.floor(Math.random () * gameQuestions.length)
    levelQuestion = gameQuestions[gamePlay];
    question.innerText = levelQuestion.question 


    //answer choices function
    answerChoice.forEach(answerChoice => {
      let choice = answerChoice.dataset['choice'];
      answerChoice.innerText =levelQuestion['answerChoice']

    })


    playerAnswer = true;

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
//use dom to reveal each part of picture 
//function and access dom