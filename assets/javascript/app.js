




var unAns = 0;               // variable to hold the number of unanswered questions
var corAns = 0;              // variable to hold the number of correclty answered questions
var notCorAns = 0;         // variable to hold the number of incorrectly answered questions
var ansYes = 9;             // variable to determine answers
var trackQ = 3;             // variable to increment questions/answers

$(document).ready(function(){ 

    function timeMe() {
        console.log(trackQ);
         count = 2;                                      // start counting from 30, 8 for testing
         counter=setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            count--;                                // decrement var count by 1
                if (count === 0) {                          // if the count gets to 0
                clearInterval(counter);                     // clearInterval
                timedOut();
                $(".timer").empty();       // blank the timer div
                }
            $(".timer").html(count);   // show the timer in the HTML
        }
    };

    function timedOut() {
        trackQ++;
        $(".ques").html("Time's Up!");
        $(".ans1").html("correct answer goes here");
        $(".ans2").empty();
        $(".ans3").empty();
        $(".ans4").empty();
        $(".timer").empty();
        countOut = 6;                                      // start counting from 30, 8 for testing
         counterOut=setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            countOut--;                                // decrement var count by 1
                if (countOut === 0) {                          // if the count gets to 0
                clearInterval(counterOut); 
                askMe();
                timeMe();                    // clearInterval
                }        
            }
        };

        function correctAns() {
            trackQ++;
            $(".ques").html("Time's Up!");
            $(".ans1").html("correct answer goes here");
            $(".ans2").empty();
            $(".ans3").empty();
            $(".ans4").empty();
            $(".timer").empty();
            countCor = 6;                                      // start counting from 30, 8 for testing
             counterCor=setInterval(timer, 1000);               // set interval to 1 second
            function timer() {                                  // timer function
                countCor--;                                // decrement var count by 1
                    if (countCor === 0) {                          // if the count gets to 0
                    clearInterval(counterCor); 
                    askMe();
                    timeMe();                    // clearInterval
                    }        
                }
            };





    function askMe() {                                      // function to populate the questions/answers to the HTML
        
        var currQuest = ["hold", "hold", "hold", "this is question 1", "this is question 2", "this is question 3", "this is question 4", "this is question 5", "this is question 6", "this is question 7", "this is question 8"];
        var answer1 = ["hold", "hold", "hold", "answer 1 1", "answer 1 2", "answer 1 3", "answer 1 4", "answer 1 5", "answer 1 6", "answer 1 7", "answer 1 8"];
        var answer2 = ["hold", "hold", "hold", "answer 2 1", "answer 2 2", "answer 2 3", "answer 2 4", "answer 2 5", "answer 2 6", "answer 2 7", "answer 2 8"];
        var answer3 = ["hold", "hold", "hold", "answer 3 1", "answer 3 2", "answer 3 3", "answer 3 4", "answer 3 5", "answer 3 6", "answer 3 7", "answer 3 8"];
        var answer4 = ["hold", "hold", "hold", "answer 4 1", "answer 4 2", "answer 4 3", "answer 4 4", "answer 4 5", "answer 4 6", "answer 4 7", "answer 4 8"];
        $(".ques").html(JSON.stringify(currQuest[trackQ]))
        $(".ans1").html(JSON.stringify(answer1[trackQ]));
        $(".ans2").html(JSON.stringify(answer2[trackQ])); 
        $(".ans3").html(JSON.stringify(answer3[trackQ]));
        $(".ans4").html(JSON.stringify(answer4[trackQ]));
        if (trackQ === 11)
            finalScreen();
    };


   
    

    function finalScreen() {
        clearInterval(counter);
        $(".ques").empty();
        $(".ans1").html("Correct Answers: " + corAns);
        $(".ans2").html("Incorrect Answers: " + notCorAns);
        $(".ans3").html("Unanswered Questions: " +unAns);
        $(".ans4").empty();
        $(".timer").empty();
    };

    $(".startMe").on("click", function() {   // start button
        $(".startMe").hide();
        timeMe();                           // call the timeMe function to start the countdown
        $(this).delay(999).queue(askMe);    // call the askMe function to populate the questions, delay until timer is onscreen
    });


    $(".ans1").on("click", function() {   // answer 1 button
        clearInterval(counter);
        //  ansYes = 0;
        correctAns();                               // call the correctAns function
        $(".timer").empty();                       // blank the timer div
        $(".ans").empty();                          // blank the ans div
  
      });
  
      $(".ans2").on("click", function() {   // answer 1 button
        clearInterval(counter);
         // ansYes = 1;
         correctAns();                          // call the correctAns function
          $(".timer").empty();                    // blank the timer div
          $(".ans").empty();                      // blank the ans div
      });
  
      $(".ans3").on("click", function() {   // answer 1 button
        clearInterval(counter);
          //ansYes = 0;
          correctAns();                             // call the correctAns function
          $(".timer").empty();                       // empty the timer div
          $(".ans").empty();                        // empty the ans div
      });
  
      $(".ans4").on("click", function() {   // answer 1 button
        clearInterval(counter);
          //ansYes = 0;
          correctAns();                             // call the correctAns function
          $(".timer").empty();                       // empty the timer div
          $(".ans").empty();                // empty the ans div
      });





});







/////////////////////////////////////////////////////////

 /*
    function correctAns() {
        clearInterval(counter);
        $(".ques").html("post the correct answer");
        $(".timer").empty(); 
        $(".ans").empty();
        var count2 = 3;                                      // 6 for testing
        var counter2=setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            count2--;                                           // decrement var count by 1
                if (count2 === 0) {                          // if the count gets to 0
                clearInterval(counter2);                     // clearInterval
                timeMe();                                   // call the timeMe function
                $(this).delay(999).queue(askMe);            // call the askMe function
                }
                if (ansYes === 0) {
                    notCorAns++;
                } else if (ansYes === 1) {
                    corAns++;
                } else {
                    unAns++;
                }
        }
    };*/



///////////////////////////////////////////////////////////////

/*
$(document).ready(function(){ 


 var currQuest = ["this is question 1", "this is question 2", "this is question 3", "this is question 4", "this is question 5", "this is question 6", "this is question 7", "this is question 8"];
 var answer1 = ["answer 1 1", "answer 1 2", "answer 1 3", "answer 1 4", "answer 1 5", "answer 1 6", "answer 1 7", "answer 1 8"];
 var answer2 = ["answer 2 1", "answer 2 2", "answer 2 3", "answer 2 4", "answer 2 5", "answer 2 6", "answer 2 7", "answer 2 8"];
 var answer3 = ["answer 3 1", "answer 3 2", "answer 3 3", "answer 3 4", "answer 3 5", "answer 3 6", "answer 3 7", "answer 3 8"];
 var answer4 = ["answer 4 1", "answer 4 2", "answer 4 3", "answer 4 4", "answer 4 5", "answer 4 6", "answer 4 7", "answer 4 8"];

var ansYes = 0;
var notCorAns = 0;
var corAns = 0;
var unAns = 0;
var testTracker = 2;

var questionMe = "first";

console.log(testTracker);


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

        
       // var testTracker = 0;
     /*   if (questionMe === "first") {
            questionMe = "a";
            testTracker = 1;
        } else if (questionMe === "a") {
            questionMe = "b";
            testTracker = 2;
        } else if (questionMe === "b") {
            questionMe = "c"; 
            testTracker = 3;
        } else if (questionMe === "c") {
            questionMe = "d";
            testTracker = 4;
        } else if (questionMe === "d") {
            questionMe = "e";
            testTracker = 5;
        } else if (questionMe === "e") {
            questionMe = "f";
            testTracker = 6;
        } else if (questionMe === "f") {
            questionMe = "g";
            testTracker = 7;
        } else if (questionMe === "g") {
            questionMe = "h";
            testTracker = 8;
       // } else (testTracker === 8) {
         //   finalScreen();
        }   */
   /*
    console.log(testTracker);
    testTracker++;
        $(".ques").html(JSON.stringify(currQuest[testTracker]));
        $(".ans1").html(JSON.stringify(answer1[testTracker]));
        $(".ans2").html(JSON.stringify(answer2[testTracker]));
        $(".ans3").html(JSON.stringify(answer3[testTracker]));
        $(".ans4").html(JSON.stringify(answer4[testTracker]));  
        
    };

    function correctAns() {
   /*     if (testTracker === 1) {
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
        }   */  /*
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
       //testTracker++;
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
*/






