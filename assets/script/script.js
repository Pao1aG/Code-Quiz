var start = document.querySelector(".startingPage");
var q1 = document.querySelector(".question1");
var q2 = document.querySelector(".question2");
var q3 = document.querySelector(".question3");
var q4 = document.querySelector(".question4");
var q5 = document.querySelector(".question5")
var finish = document.querySelector(".allDone");
var goBack = document.querySelector(".back");
var scoresList = document.querySelector(".highscores");

// var rightAns = document.querySelector(".right");
// var wrongAns = document.querySelector(".wrong");

var mode = "reveal";


//Checking for correct answer, syntax at t.ly/T76D

var buttons = document.querySelectorAll("input[type=button]");
console.log(buttons);

for (let index = 0; index < buttons.length; index++) {
   buttons[index].addEventListener("click", checkCorrect);
}

var questionNum = 1;

function checkCorrect() {
    if(this.id === "correct") {
        console.log(buttons.id + "  correct"); 
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
        console.log(buttons.id + "  incorrect");
        if(questionNum === 1){
            document.querySelector("#wrong1").setAttribute("class", "reveal");
        } else if (questionNum === 2) {
            document.querySelector("#wrong2").setAttribute("class", "reveal");
        } else if (questionNum === 3) {
            document.querySelector("#wrong3").setAttribute("class", "reveal");
        } else if (questionNum === 4) {
            document.querySelector("#wrong4").setAttribute("class", "reveal");
        } else if (questionNum === 5) {
            document.querySelector("#wrong5").setAttribute("class", "reveal");
        };
    };
    questionNum++; //this changes the question number by 1
    console.log(this.id);// returns the specific buttons' id(correct or incorrect)
};

// Starting Page
start.addEventListener("click", function(e) {
    e.preventDefault();
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

// Add Initials
finish.addEventListener("submit", function(e){
    e.preventDefault();

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



