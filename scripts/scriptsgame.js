
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
    
        question: "Which ancient esoteric organisation has often been accused of plotting to bring about a new world order?",
        answerChoice: ["C.W.A", "Freemasonry", "Rotary International", "Starlight Foundation"],
        winner: "Freemasonry",
        image: 1,

    },

    {

        question: " Technology is one of the villains associated with the New World Order.The secret elite is planning to take over by using this in which way?",
        answerChoice:["Human enhancement tech", " A world wide epidemic of obesity","Mind control placed in teeth fillings","Mind control drugs in our drinking water"],
        winner: "Human enhancement technologies",
        image: 2,
    
},

{
    
    
        question: "Which cartoon show was said to reveal future events?",
        answerChoice:["Family Guy","The Simpsons","Rick and Morty","Robot Chicken"],
        winner: "The Simpsons",
        image: 3,
    
},

{
    
    
    
        question: "Who was meant to lead QAnon's predicted 'Storm'?",
        answerChoice:["Joe Biden", "Barrack Obama", "Donald Trump", "John F Kennedy"],
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