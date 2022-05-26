var state = 'start';
var quiz = 'quiz';
var end = 'end';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var beginButton = documnet.querySelector("#begin button");
var title = document.querySelector("#title");
var timeEl = document.querySelector("#time");
var contentEl = document.querySelector("#content");
var choicesEl = document.querySelector("#choices");

var currentQuestion = 0;
var currentAnswers = 0;
var quizFinished = false;
var questions = [
    {
        question: "What fruit is featured in every episode of the tv series Psych",
        answer: "Pineapple",
        choices: [
            "Kiwi"
            "Orange"
            "Pear"
            "Pineapple"
        ]
    }
    ,
        question: "What is Shawn's best friends name?",
        answer: "Gus",
        choices: [
            "Ben"
            "Gus"
            "Chris"
            "Henry"
        ]
    ,
    
        question: "Who is Shawn's main love interest?",
        answer: "Juliette",
        choices: [
            "Amy"
            "Mary"
            "Juliette"
            "Abigail"
        ]
    ,
    question: "Who is the Chief of Police?",
        answer: "Vick",
        choices: [
            "Lassiter"
            "O'Hara"
            "Vick"
            "Spencer"
        ]
    ,
    
        question: "What is Shawn and Gus' catchphrase?",
        answer: "Come on son",
        choices: [
            "Let's go"
            "Come on son"
            "To infinity and beyond"
            "yolo"
        ]
]

function init(){
    displayState();
};
var secondsLeft = 20
function displayTime(){
    timeEl.textContent = secondsLeft + "seconds left";
}
function displayQuestion(){
    var eachQuestion = questions[currentQustion].question
    contentEl.textContent = eachQuestion

}
function displayChoices(){
    var eachChoice = questions[currentQuestion].choices
    choicesEl.textContent = eachChoice
    for(var i = 0; i < eachChoice.length; i++){
        var doc = document.createElement("button")
        doc.setAttribute("class", "solid")
        doc.setAttribute("value", "each choice")
        choicesEl.textContent = eachChoice[i]
    }
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

myTitle.addEventListener("click", function() {
    state = "end"
    displayState();
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
