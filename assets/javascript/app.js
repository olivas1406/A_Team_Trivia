
var unAns = 0;               // variable to hold the number of unanswered questions
var corAns = 0;              // variable to hold the number of correclty answered questions
var notCorAns = 0;         // variable to hold the number of incorrectly answered questions
var ansYes = 9;             // variable to determine answers
var trackQ = 2;             // variable to increment questions/answers

$(document).ready(function(){ 

    function timeMe() {
        $(".restart").remove();
        console.log(trackQ);
        trackQ++;
        var count = 4;                                      // start counting from 30, 8 for testing
        var counter = setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
           // count = count-1;                                // decrement var count by 1
                count--;    
            if (count === 0) {                          // if the count gets to 0
                unAns++;
                stop();
                clearInterval(counter);                     // clearInterval
                timeMe();                                   // call the timeMe function
                askMe();                                    // call the askMe function
              //  correctAns();
                $(".timer").html("0");         // blank the timer div
                }
            $(".timer").html(count).css("color" , "black");   // show the timer in the HTML
        }
    };

    function askMe() {             // function to populate the questions/answers to the HTML
        var currQuest = ["hold", "hold", "hold", "this is question 1", "this is question 2", "this is question 3", "this is question 4", "this is question 5", "this is question 6", "this is question 7", "this is question 8"];
        var answer1 = ["hold", "hold", "hold", "answer 1 1", "answer 1 2", "answer 1 3", "answer 1 4", "answer 1 5", "answer 1 6", "answer 1 7", "answer 1 8"];
        var answer2 = ["hold", "hold", "hold", "answer 2 1", "answer 2 2", "answer 2 3", "answer 2 4", "answer 2 5", "answer 2 6", "answer 2 7", "answer 2 8"];
        var answer3 = ["hold", "hold", "hold", "answer 3 1", "answer 3 2", "answer 3 3", "answer 3 4", "answer 3 5", "answer 3 6", "answer 3 7", "answer 3 8"];
        var answer4 = ["hold", "hold", "hold", "answer 4 1", "answer 4 2", "answer 4 3", "answer 4 4", "answer 4 5", "answer 4 6", "answer 4 7", "answer 4 8"];
        $(".ques").html(JSON.stringify(currQuest[trackQ]))
        $(".text1").html(JSON.stringify(answer1[trackQ]));
        $(".text2").html(JSON.stringify(answer2[trackQ])); 
        $(".text3").html(JSON.stringify(answer3[trackQ]));
        $(".text4").html(JSON.stringify(answer4[trackQ]));
        if (trackQ === 11)
            finalScreen();
    };
    
    function correctAns() {
        if (trackQ === 4) {
            $(".ques").html(answer1[4]);
        } else if (trackQ === 7) {
            $(".ques").html(answer1[7]);
        } else if (trackQ === 2) {
            $(".ques").html(answer2[2]);
        } else if (trackQ === 6) {
            $(".ques").html(answer2[6]);
        } else if (trackQ === 9) {
            $(".ques").html(answer2[9]);
        } else if (trackQ === 3) {
            $(".ques").html(answer3[3]);
        } else if (trackQ === 8) {
            $(".ques").html(answer3[8]);
        } else if (trackQ === 5) {
            $(".ques").html(answer4[5]);
        }
        $(".timer").css("color" , "white"); 
        $(".ans").css("color" , "white"); 
        var count2 = 7;                                      // start counting from 7
        var counter2 = setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            count2 = count2-1;                                // decrement var count by 1
                if (count === 0) {                          // if the count gets to 0
                stop();
                    clearInterval(counter2);                     // clearInterval
                timeMe();                                   // call the timeMe function
                $(this).delay(999).queue(askMe);            // call the askMe function
                };
                if (ansYes === 0) {
                    notCorAns++;
                } else if (ansYes === 1) {
                    corAns++;
                } else {
                    unAns++;
                };
        };
    };

    function finalScreen() {
        $(".ques").empty();
        $(".text1").html("Correct Answers: " + corAns);
        $(".text2").html("Incorrect Answers: " + notCorAns);
        $(".text3").html("Unanswered Questions: " +unAns);
        $(".text4").empty();
        $(".timer").remove();  // need to addclass 'timer' in start button for restart
                                // need to add RESTART button

        $(".r1c1").addClass("restart");
        $(".restart").html("RESTART");
        $(".restart").on("click", function() {   // restart button
        alert("you clicked restart")  
        restartMe();
        });
    };
    
        function restartMe() {
        timeMe();                           // call the timeMe function to start the countdown
        $(this).delay(999).queue(askMe);    // call the askMe function to populate the questions, delay until timer is onscreen
        $(".r2c1").addClass("timer");
        var trackQ = 2;  
        ansyes = 9;
        corAns = 0;
        notCorAns = 0;
        unAns = 0;
        };

    $(".startB").on("click", function() {   // start button
        timeMe();                           // call the timeMe function to start the countdown
        $(this).delay(999).queue(askMe);    // call the askMe function to populate the questions, delay until timer is onscreen
    });

    $(".text1").on("click", function() {   // answer 1 button
        if ((trackQ === 4) || (trackQ === 7)) {
            ansYes = 1;
        } else {
            ansYes = 0;
        }
        correctAns();                               // call the correctAns function
        $(".timer").empty();                       // blank the timer div
        $(".ans").empty();                          // blank the ans div
  
      });
  
      $(".text2").on("click", function() {   // answer 1 button
        if ((trackQ === 2) || (trackQ === 6) || (trackQ === 9)) {
            ansYes = 1;
        } else {
            ansYes = 0;
        }
         correctAns();                          // call the correctAns function
          $(".timer").empty();                    // blank the timer div
          $(".ans").empty();                      // blank the ans div
      });
  
      $(".text3").on("click", function() {   // answer 1 button
        if ((trackQ === 3) || (trackQ === 8)) {
            ansYes = 1;
        } else {
            ansYes = 0;
        }
          correctAns();                             // call the correctAns function
          $(".timer").empty();                       // empty the timer div
          $(".ans").empty();                        // empty the ans div
      });
  
      $(".text4").on("click", function() {   // answer 1 button
        if (trackQ === 5) {
            ansYes = 1;
        } else {
            ansYes = 0;
        }
          correctAns();                             // call the correctAns function
          $(".timer").empty();                       // empty the timer div
          $(".ans").empty();                // empty the ans div
      });


});

