console.log("Sanity Check2"); 




//Questions
let gameQuestions =[{
    
        questions: "What color is right?",
        answerChoices: ["red", "blue", "green", "orange"],
        correctAnswer: "red",

    },

    {

        questions: "Whats the odd number?",
        answerChoices:["2", "5","4","8"],
        correctAnswer: "5",
    
},

{
    
    
        questions: "How many days of the week?",
        answerChoices:["0","7","4","1"],
        correctAnswer: "7",
    
},

{
    
    
    
        questions: "Yellow is a primary color",
        answerChoices:["True", "False"],
        correctAnswer: "True",

    
}];


//gameplay function 
let playerScore = 20;
let totalQuestions = 6;


function deepState (){
    this.score = 0; //player starting score
    this.questions = gameQuestions; //game question need to generate randomly
}
enterDeepState = () => {
    score = 0;
    level = 0;
    questionBank = gameQuestions;
    choices = gameQuestions[level].answerChoices;
    console.log(choices);
}
 enterDeepState();


 //buttons
 Array.from(document.getElementsByClassName("btn-answer")).forEach(button => {
   button.addEventListener("click", function (event){
      //if statments for correct and incorrect answer
      if (correctAnswer === true){

      }
      if (incorrectAnswer === false){

    }
      console.log(event.target.dataset.correct)
   })  
 });


//Winning Conditions
//Wrong Answer
//PictureTransitions 
//use dom to reveal each part of picture 
//function and access dom