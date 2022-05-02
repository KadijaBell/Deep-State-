console.log("Sanity Check"); 


//questions function

const questions = document.getElementById("questions")


let choices = document.getElementsByClassName("answerChoices")

let question = [{


    question: "What color is right?",
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


    }


];

//gameplay function 
let playerScore = 20;
let totalQuestions = 4;


enterDeepState = () => {
    score = 0;
    levelCounter = 0;
    questionBank = [...question];
    generateQuestion();
}
 enterDeepState();

function generateQuestion = 