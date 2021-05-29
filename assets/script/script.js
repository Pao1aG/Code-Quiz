var start = document.querySelector(".startingPage");
var q1 = document.querySelector(".question1");
var q2 = document.querySelector(".question2");
var q3 = document.querySelector(".question3");
var q4 = document.querySelector(".question4");
var finish = document.querySelector(".allDone");
var goBack = document.querySelector(".back");
var scoresList = document.querySelector(".highscores");



start.addEventListener("click", function(e) {
    e.preventDefault();

    var mode = "reveal";

    if (mode === "reveal") {
        mode = "hide";
        start.setAttribute("class", "hide");
        q1.setAttribute("class", "reveal");
    } 
});

q1.addEventListener("click", function(e) {
    e.preventDefault();

    mode = "reveal";

    if (mode === "reveal") {
        mode = "hide";
        q1.setAttribute("class", "hide");
        q2.setAttribute("class", "reveal");
    }
});

q2.addEventListener("click", function(e) {
    e.preventDefault();

    mode = "reveal";

    if (mode === "reveal") {
        mode = "hide";
        q2.setAttribute("class", "hide");
        q3.setAttribute("class", "reveal");
    }
});

q3.addEventListener("click", function(e) {
    e.preventDefault();

    mode = "reveal";

    if (mode === "reveal") {
        mode = "hide";
        q3.setAttribute("class", "hide");
        q4.setAttribute("class", "reveal");
    }
});

q4.addEventListener("click", function(e){
    e.preventDefault();

    mode = "reveal";

    if (mode === "reveal") {
        mode = "hide";
        q4.setAttribute("class", "hide");
        finish.setAttribute("class", "reveal");
    }
});

finish.addEventListener("submit", function(e){
    e.preventDefault();

    mode = "reveal";

    if (mode === "reveal") {
        mode === "hide";
        finish.setAttribute("class", "hide");
        scoresList.setAttribute("class", "reveal");
    }
});

goBack.addEventListener("click", function(e){
    e.preventDefault();
    
    var clickBack = true;
    if (clickBack === true) {
        mode = "hide";
        scoresList.setAttribute("class", "hide");
        mode = "reveal";
        finish.setAttribute("class", "reveal");
    }
});




