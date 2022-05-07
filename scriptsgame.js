
console.log("Sanity Check")

const question = document.getElementById("question")
const answer = Array.from(document.getElementsByClassName ("answer-text"))


let gameQuestions = [];
let levelQuestion = {};
let score = 0;
let counter= 0;
let playerAnswer = false;


//Questions
let questions =[{
    
        question: "What color is right?",
        answerChoice: ["red", "blue", "green", "orange"],
        winner: "red",
        image: 1,

    },

    {

        question: "Whats the odd number?",
        answerChoice:["2", "5","4","8"],
        winner: "5",
        image: 2,
    
},

{
    
    
        question: "How many days of the week?",
        answerChoice:["0","7","4","1"],
        winner: "7",
        image: 3,
    
},

{
    
    
    
        question: "Yellow is a primary color",
        answerChoice:["True", "False", "Test ", "Test2"],
        winner: "True",
        image:4,
    
}];

//Score regs
let correct = 20;
let roundQuestions = 4;

enterDeepState = () => {
    score = 0;
    level = 0;
    gameQuestions = [...questions];
    choices = [answer];
    generateNewQuest();
 }

//will generate a random question each round 
 generateNewQuest = () => {
    level++;
    let gamePlay = Math.floor(Math.random () * gameQuestions.length)
    levelQuestion = gameQuestions[gamePlay];
    question.innerText = levelQuestion.question 
//answer choices function
    let index = 0 
    
    levelQuestion.answerChoice.forEach(answerChoice => {  
      answer[index].innerText = answerChoice
      index++;

    })

    
    playerAnswer = true;

 }


 enterDeepState();

 

 //buttons

let previousButtonClick;
 Array.from(document.getElementsByClassName("btn-answer")).forEach(button => {
       
   button.addEventListener("click", function (event){
     //Player click rest function 
     if (previousButtonClick){
        resetClick(previousButtonClick);
     }
      
      previousButtonClick = this; 
     let winner = button.getElementsByClassName("answer-text")[0].innerText
//if statments for correct and incorrect answer
     console.log('what is winner', winner);
     console.log('what is levelQuestion.winner', levelQuestion.winner);
       if (winner === levelQuestion.winner) {
               button.style.backgroundColor = 'green';
               score++;
               console.log("This is my score" , score)
//PictureTransitions
        let endGameId = "answer-picture-" + levelQuestion.image;
        let endGameImage = document.getElementById(endGameId);
                endGameImage.setAttribute("class","images-active");
       }else{
               button.style.backgroundColor = 'black';
       }

       

       
   }) 
   
   

 });

 let resetClick = (button) => {
        button.style.backgroundColor = 'red';
 };


//question transition 

//use dom to reveal each part of picture 
//function and access dom