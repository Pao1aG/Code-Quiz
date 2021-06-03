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
var scoresList = document.querySelector(".highscores");
var goBack = document.querySelector(".back");
var resetHS = document.querySelector(".clearForm");

var mode = "reveal";


//Linking View Highscores to Highscores page 
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
   
    go2HS();
    
    scoresList.setAttribute("class", "reveal");

    clearInterval(timerInterval);

    displayScores();
});

//Adding timer function
var secondsLeft = 60;

var timerInterval = setInterval(startTimer, 1000);

function startTimer() {
   if(start.className === "hide"){ //this prevents timer from starting before clicking button
       secondsLeft--;
       countTxt.textContent= secondsLeft; //this sets the counter to 60
   };
   
    //This stops counter from going to negative t.ly/646Q 
    //Also stops timer when reaching the AllDone or scoresList page
    //And when timer stops from any page, it leads to AllDone page
   if(secondsLeft <=0 || finish.className === "reveal"){ 
       clearInterval(timerInterval);
       q1.setAttribute("class", "hide");
       q2.setAttribute("class", "hide");
       q3.setAttribute("class", "hide");
       q4.setAttribute("class", "hide");
       q5.setAttribute("class", "hide");
       finish.setAttribute("class", "reveal");
       return;
   };
};

//Decrease time function for incorrect answers
function decreaseTimer() {
    secondsLeft = secondsLeft-10;
    countTxt.textContent= secondsLeft;

    if((secondsLeft) <= 0){
        return;
    };
};

//Checking for correct answer, syntax at t.ly/T76D
var buttons = document.querySelectorAll("input[type=button]");
//Loop adds event listener to every item in array of "buttons"
for (let index = 0; index < buttons.length; index++) {
   buttons[index].addEventListener("click", checkCorrect); //checkCorrect executes the function
};

var questionNum = 1;

function checkCorrect() {
    if(this.id === "correct") {
        //console.log(this.id); // returns the specific buttons' id(correct or incorrect)
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
        //console.log(this.id);
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

    if (mode === "reveal") {
        mode = "hide";
        start.setAttribute("class", "hide");
        q1.setAttribute("class", "reveal");
    };

    startTimer();// excutes the timer function
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

// Function to append initials to scoresList (explanation t.ly/18gK)
function initialsAdd () {
    document.querySelector(".initialList").innerHTML= "Your Highscore";

    var list = document.createElement("li"); //resource for createElement t.ly/g7NM 
    list.setAttribute("style", "background-color: rgb(91, 39, 139); width: 300px; border-radius:10px; opacity: 80%; font-weight: bold; color: white ");
    document.querySelector(".initialList").append(list);
    var listValue = document.querySelector("input[type=text]").value;//submitted initials
    list.append(listValue);

    var timeValue = document.querySelector("#count");
    list.append("  ---- ",timeValue);
};

// Add Initials eventlistener
finish.addEventListener("submit", function(e){
    e.preventDefault();

    initialsAdd();//appends text into highscores list
 
    mode = "reveal";

    if (mode === "reveal") {
        mode === "hide";
        finish.setAttribute("class", "hide");
        scoresList.setAttribute("class", "reveal");
        
        saveScores();
        displayScores();
    };
});

//Local Storage Functions
var savedScoresArray = [];

function saveScores() {
    if(scoresList.className === "reveal") {
        var userScore = {
            initials: document.querySelector("input[type=text]").value, //same as intialList
            timeScore: secondsLeft
        };
        
        if(localStorage.userScoresArray != null) {
            console.log(localStorage.userScoresArray);
           
            savedScoresArray = JSON.parse(localStorage.getItem("userScoresArray")); //now contains what was in local storage
            savedScoresArray.push(userScore); //pushing new object into array
            localStorage.setItem("userScoresArray", JSON.stringify(savedScoresArray)); //sending array back into local storage
       } else {
        savedScoresArray.push(userScore); //add new object into array
        localStorage.setItem("userScoresArray", JSON.stringify(savedScoresArray));//send array to local storage
       };
    };
};

function displayScores() {
  
    var savedScores = JSON.parse(localStorage.getItem("userScoresArray")); //converting array saved in local storage back to object
    // console.log(savedScores); //this is the whole array
    // var scoresObj = {name: savedScores[0].initials, score: savedScores[0].timeScore};//pulling values from object
    // console.log(scoresObj);  //this is one object inside the array

    if (savedScores !== null) {
        var highScoresUl = document.querySelector(".highscoresList");
        highScoresUl.innerHTML= "~Past Highscores~";
        highScoresUl.setAttribute("class", "reveal");
        highScoresUl.setAttribute("style", "background-color: purple; opacity:85%; font-weight:bold; color:white; width: 300px; margin-left:18px; border-radius:5px;");

        //For loop to create li for every saved entry in the array
        for (var index = 0; index < savedScores.length; index ++) {
            var user = savedScores[index].initials + " ---- " + savedScores[index].timeScore; //at index of savedScores, get value of initials and timescore
            console.log(user);
    
            var userList = document.createElement("li");
            userList.textContent= user;
    
            highScoresUl.append(userList); //add the values in user to li
        };
    } else {
        return;
    };
};

// Highscores Page, Back Button
goBack.addEventListener("click", function(e){
    e.preventDefault();
    
    var clickBack = true;
    if (clickBack === true) {
       location.reload(); //this method reloads the wepage t.ly/UJGZ
    };
});
``
//Reset Highscores
resetHS.addEventListener("click", function(e){
    e.preventDefault();
    
    if(localStorage !== null){
        location.reload();
    };

    localStorage.clear();
});


