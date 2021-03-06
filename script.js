var state = 'start';
var quiz = 'quiz';
var end = 'end';
var answersCorrect = 0;
//establish variables
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var cardEl = document.querySelector("#card");
var beginButton = document.querySelector("#begin-button");
var myTitle = document.querySelector("#title");
var timeEl = document.querySelector("#time");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var button1El = document.querySelector("#but1");
var button2El = document.querySelector("#but2");
var button3El = document.querySelector("#but3");
var button4El = document.querySelector("#but4");
var submitButton = document.querySelector("#submit");
var selectionEl = document.querySelector("#selection");
var scoreEl = document.querySelector("#score");
var restartEl = document.querySelector("#restart");
var nameEl = document.querySelector("#playername");
var hsEl = document.querySelector("#high-scores");
var currentQuestion = 0;
var currentAnswers = 0;
var quizFinished = false;

//questions
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
function init() {

    displayState();
};
var secondsLeft = 30
function displayTime() {
    timeEl.textContent = secondsLeft + " seconds left";
}
function displayQuestion() {
    var eachQuestion = questions[currentQuestion].question
    questionEl.textContent = eachQuestion
    displayChoices();

}
function displayChoices() {
    var eachChoice = questions[currentQuestion].choices
    button1El.textContent = eachChoice[0]
    button2El.textContent = eachChoice[1]
    button3El.textContent = eachChoice[2]
    button4El.textContent = eachChoice[3]

}
function displayState() {
    if (state === 'start') {
        startEl.style.display = 'block';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
        cardEl.style.display = 'none';

    }
    if (state === 'quiz') {
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
        cardEl.style.display = 'none';
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
        cardEl.style.display = 'none';
        scoreEl.textContent = secondsLeft;
    }
    if (state === 'card') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
        cardEl.style.display = 'block';
        generateHighScores();
    }
}
//pushes scores to page and makes visible
function generateHighScores(){
    var scores = JSON.parse(localStorage.getItem("highScore")) || [];
    var entry=""    ;

    for(var i=0;i<scores.length;i++){
        entry=document.createElement("p")
        entry.textContent=scores[i].playerName+ " scored "+scores[i].score
        hsEl.appendChild(entry);
    }
}

beginButton.addEventListener("click", function () {
    state = "quiz";
    displayState();
    displayTime();
    displayQuestion();

    var timerInterval = setInterval(function () {
        if (state != "quiz") {
            clearInterval(timerInterval);
        }
        secondsLeft--;
        displayTime();
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            state = "end"
            displayState();
        }
    }, 1000)
});

selectionEl.addEventListener("click", function (event) {
    var element = event.target;

    if (element.textContent == questions[currentQuestion].answer) {
        //evaluate if the answer was correct
        answersCorrect++;
    } else {
        //remove time from timer
        secondsLeft -= 5
    }
    if (currentQuestion < 4) {
        currentQuestion++
        displayQuestion();
    } else {
        state = "end"
        displayState();
    }

}
)
submitButton.addEventListener("click", function () {
    var scores = JSON.parse(localStorage.getItem("highScore")) || [];
    // Save related form data as an object
    var highScore = {
        playerName: nameEl.value,
        score: secondsLeft,
    };

    scores.push(highScore);

    //store highscores and JSON.stringify to convert it as a string
    localStorage.setItem("highScore", JSON.stringify(scores));

    //go to high scores
    state = "card";
    displayState();
})

restartEl.addEventListener("click", function () {
    window.location.replace("index.html");
})

function saveLastScore() {

}

init();

