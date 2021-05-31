var viewHS = document.querySelector(".viewHS");
var timer = document.querySelector(".timer");
var countTxt = document.querySelector("#count")
var start = document.querySelector(".startingPage");
var q1 = document.querySelector(".question1");
var q2 = document.querySelector(".question2");
var q3 = document.querySelector(".question3");
var q4 = document.querySelector(".question4");
var q5 = document.querySelector(".question5")
var finish = document.querySelector(".allDone");
var goBack = document.querySelector(".back");
var scoresList = document.querySelector(".highscores");

var mode = "reveal";

//Linking View Highscores to Highscores page with function
function go2HS() {
    start.setAttribute("class", "hide")
    q1.setAttribute("class", "hide");
    q2.setAttribute("class", "hide");
    q3.setAttribute("class", "hide");
    q4.setAttribute("class", "hide");
    q5.setAttribute("class", "hide");
    finish.setAttribute("class", "hide");
};

viewHS.addEventListener("click", function(e){

    e.preventDefault();
    
    scoresList.setAttribute("class", "reveal");

    go2HS();
});


//Adding timer function
var secondsLeft = 60;

var timerInterval = setInterval(startTimer, 1000);

function startTimer() {
    secondsLeft--;
    countTxt.textContent= secondsLeft; //this sets the counter to 60
   
    //This stops counter from going to negative t.ly/646Q 
    //Also stops timer when reaching the AllDone page
   if(secondsLeft <=0 || finish.className === "reveal"){ 
       clearInterval(timerInterval);
       return;
   };
};

//Adding decrease time function for incorrect answers

function decreaseTimer() {
    secondsLeft = secondsLeft-10;
    countTxt.textContent= secondsLeft;

    if((secondsLeft) <= 0){
        return;
    };
};

//Checking for correct answer, syntax at t.ly/T76D
var buttons = document.querySelectorAll("input[type=button]");
console.log(buttons);
//Loop adds event listener to every item in array of "buttons"
for (let index = 0; index < buttons.length; index++) {
   buttons[index].addEventListener("click", checkCorrect); //checkCorrect executes the function
}

var questionNum = 1;

function checkCorrect() {
    if(this.id === "correct") {
        console.log(this.id); // returns the specific buttons' id(correct or incorrect)
        if(questionNum === 1) {
           document.querySelector("#right1").setAttribute("class", "reveal");
        } else if (questionNum === 2) {
            document.querySelector("#right2").setAttribute("class", "reveal");
        } else if (questionNum === 3) {
            document.querySelector("#right3").setAttribute("class", "reveal");
        } else if (questionNum === 4) {
            document.querySelector("#right4").setAttribute("class", "reveal");
        } else if (questionNum === 5) {
            document.querySelector("#right5").setAttribute("class", "reveal");
        };
    } else {
        console.log(this.id);
        if(questionNum === 1){
            document.querySelector("#wrong1").setAttribute("class", "reveal");
            decreaseTimer();
        } else if (questionNum === 2) {
            document.querySelector("#wrong2").setAttribute("class", "reveal");
            decreaseTimer();
        } else if (questionNum === 3) {
            document.querySelector("#wrong3").setAttribute("class", "reveal");
            decreaseTimer();
        } else if (questionNum === 4) {
            document.querySelector("#wrong4").setAttribute("class", "reveal");
            decreaseTimer();
        } else if (questionNum === 5) {
            document.querySelector("#wrong5").setAttribute("class", "reveal");
            decreaseTimer();
        };
    };
    questionNum++; //this changes the question number by 1
};

// Starting Page
start.addEventListener("click", function(e) {
    e.preventDefault();

    startTimer();

    if (mode === "reveal") {
        mode = "hide";
        start.setAttribute("class", "hide");
        q1.setAttribute("class", "reveal");
    } 
});

// Question 1
q1.addEventListener("click", function(e) {
    e.preventDefault();
   
    mode = "reveal";
    
    if (mode === "reveal") {
        setTimeout(function(){
            mode = "hide";
            q1.setAttribute("class", "hide");
            q2.setAttribute("class", "reveal");
        },2000);
    };
});

// Question 2
q2.addEventListener("click", function(e) {
    e.preventDefault();

    mode = "reveal";

    if (mode === "reveal") {
        setTimeout(function(){
            mode = "hide";
            q2.setAttribute("class", "hide");
            q3.setAttribute("class", "reveal");
        },2000);
    };
});

// Question 3
q3.addEventListener("click", function(e) {
    e.preventDefault();

    mode = "reveal";

    if (mode === "reveal") {
        setTimeout(function() {
            q3.setAttribute("class", "hide");
            q4.setAttribute("class", "reveal");
        },2000);
    };
});

// Question 4
q4.addEventListener("click", function(e){
    e.preventDefault();

    mode = "reveal";

    if (mode === "reveal") {
        setTimeout(function(){
            mode = "hide";
            q4.setAttribute("class", "hide");
            q5.setAttribute("class", "reveal");
        },2000);
    };
});

// Question 5
q5.addEventListener("click", function(e){
    e.preventDefault();

    mode = "reveal";

    if (mode === "reveal") {
        setTimeout(function(){
            mode = "hide";
            q5.setAttribute("class", "hide");
            finish.setAttribute("class", "reveal");
        },2000);
    };

   
});

// Function to append initials to scoresList

function initialsAdd () {
    var list = document.createElement("p");
    document.querySelector(".initialList").appendChild(list);
    var listValue = document.querySelector("input[type=text]");
    console.log(listValue.value);
    list.appendChild(listValue);

};

// Add Initials
finish.addEventListener("submit", function(e){
    e.preventDefault();

    initialsAdd();//appends text field

    mode = "reveal";

    if (mode === "reveal") {
        mode === "hide";
        finish.setAttribute("class", "hide");
        scoresList.setAttribute("class", "reveal");
    }
});


// Highscores Page, Back Button
goBack.addEventListener("click", function(e){
    e.preventDefault();
    
    var clickBack = true;
    if (clickBack === true) {
       location.reload(); //this method reloads the wepage t.ly/UJGZ
    };
});
``



