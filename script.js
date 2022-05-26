var state = 'start';
var quiz = 'quiz';
var end = 'end';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var beginButton = document.querySelector("#begin-button");
var myTitle = document.querySelector("#title");
var timeEl = document.querySelector("#time");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var button1El = document.querySelector("#but1");
var button2El = document.querySelector("#but2");
var button3El = document.querySelector("#but3");
var button4El = document.querySelector("#but4");

var currentQuestion = 0;
var currentAnswers = 0;
var quizFinished = false;


var questions = [
    {
        question: "What fruit is featured in every episode of the tv series Psych",
        answer: "Pineapple",
        choices: [
            "Kiwi",
            "Orange",
            "Pear",
            "Pineapple"
        ]
    }
    ,
    {
        question: "What is Shawn's best friends name?",
        answer: "Gus",
        choices: [
            "Ben",
            "Gus",
            "Chris",
            "Henry"
        ]
    }
    ,
    {
        question: "Who is Shawn's main love interest?",
        answer: "Juliette",
        choices: [
            "Amy",
            "Mary",
            "Juliette",
            "Abigail"
        ]
    }
    ,
    {
    question: "Who is the Chief of Police?",
        answer: "Vick",
        choices: [
            "Lassiter",
            "O'Hara",
            "Vick",
            "Spencer"
        ]
    }
    ,
    {    
        question: "What is Shawn and Gus' catchphrase?",
        answer: "Come on son",
        choices: [
            "Let's go",
            "Come on son",
            "To infinity and beyond",
            "yolo"
        ]
    }
]
function init(){
    
    displayState();
};
var secondsLeft = 20
function displayTime(){
    timeEl.textContent = secondsLeft + " seconds left";
}
function displayQuestion(){
    var eachQuestion = questions[currentQuestion].question
    questionEl.textContent = eachQuestion

}
function displayChoices(){
    var eachChoice = questions[currentQuestion].choices
    button1El.textContent = eachChoice[0]
    button2El.textContent = eachChoice[1]
    button3El.textContent = eachChoice[2]
    button4El.textContent = eachChoice[3]

}
function displayState(){
    if (state === 'start'){
        startEl.style.display = 'block';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
    
    }
    if (state === 'quiz'){
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
    
    }
}
beginButton.addEventListener("click", function() {
    state = "quiz";
    displayState();
    displayTime();
    displayQuestion();
    displayChoices();
    var timerInterval = setInterval(function() {
        secondsLeft--;
        displayTime();
        if(secondsLeft === 0){
            alert("Times up!")
            clearInterval(timerInterval);
        }
    }, 1000)
});



init();

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
