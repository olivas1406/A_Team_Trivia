


 var currQuest = ["this is question 1", "this is question 2", "this is question 3", "this is question 4", "this is question 5", "this is question 6", "this is question 7", "this is question 8"];
 var answer1 = ["answer 1 1", "answer 1 2", "answer 1 3", "answer 1 4", "answer 1 5", "answer 1 6", "answer 1 7", "answer 1 8"];
 var answer2 = ["answer 2 1", "answer 2 2", "answer 2 3", "answer 2 4", "answer 2 5", "answer 2 6", "answer 2 7", "answer 2 8"];
 var answer3 = ["answer 3 1", "answer 3 2", "answer 3 3", "answer 3 4", "answer 3 5", "answer 3 6", "answer 3 7", "answer 3 8"];
 var answer4 = ["answer 4 1", "answer 4 2", "answer 4 3", "answer 4 4", "answer 4 5", "answer 4 6", "answer 4 7", "answer 4 8"];

var ansYes = 0;
var notCorAns = 0;
var corAns = 0;
var unAns = 0;

//var testTracker = 3;

$(document).ready(function(){ 

    function timeMe() {
       // var 
        count = 8;                                      // start counting from 30, 6 for testing
        //var 
        counter=setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            count = count-1;                                // decrement var count by 1
                if (count === 0) {                          // if the count gets to 0
                clearInterval(counter);                     // clearInterval 
                $(".timer").empty();                       // remove the timer div
                $(".ques").empty();
                correctAns();  
                ansYes = 3;  
            }
            $(".timer").html(count);                        // push var count to the HTML to display the countdown
            }
        };

    function askMe() {
        testTracker = 3;
        $(".ques").html(JSON.stringify(currQuest[testTracker]));
        $(".ans1").html(JSON.stringify(answer1[testTracker]));
        $(".ans2").html(JSON.stringify(answer2[testTracker]));
        $(".ans3").html(JSON.stringify(answer3[testTracker]));
        $(".ans4").html(JSON.stringify(answer4[testTracker]));
    };

    function correctAns() {
        if (testTracker === 2) {
            $(".r2c1").html("The Correct Answer is " + answer1[4]);
        } else if (testTracker === 2) {
            $(".r2c1").html("The Correct Answer is " + answer1[7]);
        } else if (testTracker === 3) {
            $(".r2c1").html("The Correct Answer is " + answer2[2]);
        } else if (testTracker === 4) {
            $(".r2c1").html("The Correct Answer is " + answer2[6]);
        } else if (testTracker === 5) {
            $(".r2c1").html("The Correct Answer is " + answer2[9]);
        } else if (testTracker === 6) {
            $(".r2c1").html("The Correct Answer is " + answer3[1]);
        } else if (testTracker === 7) {
            $(".r2c1").html("The Correct Answer is " + answer3[3]);
        } else if (testTracker === 8) {
            $(".r2c1").html("The Correct Answer is " + answer3[8]);
        } else if (testTracker === 9) {
            $(".r2c1").html("The Correct Answer is " + answer4[5])
        }
        $(".swer").hide();
        $(".timer").empty();
      //  var 
        count2 = 6;                                      // start counting from 5
      //  var 
        counter2=setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            count2--;                                // decrement var count by 1
                if (count2 === 0) {                          // if the count gets to 0
                clearInterval(counter2);     
                nextScreen();
                }
        }   
        if (ansYes === 0) {
            notCorAns++;
        } else if (ansYes === 1) {
            corAns++;
        } else {
            unAns++;
        }
    };
    
    function nextScreen() {
        testTracker++;
        timeMe();
        $(this).delay(999).queue(askMe);
        $(".swer").show();
        $(".ques").show();
    };
    
    $(".startMe").on("click", function() {   // start button
        $(".startMe").hide();
        timeMe();
        $(this).delay(999).queue(askMe);
    });

    $(".ans1").on("click", function() {   // answer 1 button
        if ((testTracker === 4) || (testTracker === 7)) {
            ansYes = 1;
        } else {
            ansYes = 0;
        }
        clearInterval(counter);
        ansYes = 0;
        correctAns();
        $(".timer").empty();                       // remove the timer div
        $(".ans").empty;
    });

    $(".ans2").on("click", function() {   // answer 1 button3
        if ((testTracker === 2) || (testTracker === 6) || (testTracker === 9)) {
            ansYes = 1;
        } else {
            ansYes = 0;
        }
        clearInterval(counter);
        ansYes = 1;
        correctAns();
        $(".timer").empty();                       // remove the timer div
        $(".ans").empty();
    });

    $(".ans3").on("click", function() {   // answer 1 button
        if ((testTracker === 1) || (testTracker === 3) || (testTracker === 8)) {
            ansYes = 1;
        } else {
            ansYes = 0;
        }
        clearInterval(counter);
        ansYes = 0;
        correctAns();
        $(".timer").empty();                       // remove the timer div
        $(".ans").empty();
    });

    $(".ans4").on("click", function() {   // answer 1 button
        if (testTracker === 5) {
            ansYes = 1;
        } else {
            ansYes = 0;
        }
        clearInterval(counter);
        ansYes = 0;
        correctAns();
        $(".timer").empty();                       // remove the timer div
        $(".ans").empty();
    });



});







