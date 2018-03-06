


 var currQuest = ["hold", "hold", "hold", "this is question 1", "this is question 2", "this is question 3", "this is question 4", "this is question 5", "this is question 6", "this is question 7", "this is question 8"];
 var answer1 = ["hold", "hold", "hold", "answer 1 1", "answer 1 2", "answer 1 3", "answer 1 4", "answer 1 5", "answer 1 6", "answer 1 7", "answer 1 8"];
 var answer2 = ["hold", "hold", "hold", "answer 2 1", "answer 2 2", "answer 2 3", "answer 2 4", "answer 2 5", "answer 2 6", "answer 2 7", "answer 2 8"];
 var answer3 = ["hold", "hold", "hold", "answer 3 1", "answer 3 2", "answer 3 3", "answer 3 4", "answer 3 5", "answer 3 6", "answer 3 7", "answer 3 8"];
 var answer4 = ["hold", "hold", "hold", "answer 4 1", "answer 4 2", "answer 4 3", "answer 4 4", "answer 4 5", "answer 4 6", "answer 4 7", "answer 4 8"];


var unAns = 0;                                                          // Variable for Unaswered questions
var corAns = 0;                                                         // Variable for Correctly answered questions
var notCorAns = 0;                                                      // Variable for Incorrectly answered questions
var ansYes = 9;                                                         // Variable to determine answers
var trackQ = 3;                                                         // Variable to increment questions/answers

$(document).ready(function(){ 

    function timeMe() {                                                 // Main game timer
        console.log(trackQ);                                            // T/S
         count = 6;                                                     // Start counting from 30, 6 for testing
         counter=setInterval(timer, 1000);                              // Set interval to 1 second
        function timer() {                                              // Timer function
            count--;                                                    // Decrement var Count by 1
                if (count === 0) {                                      // If the count gets to 0
                clearInterval(counter);                                 // clearInterval
                timedOut();                                             // Call the timedOut function
                $(".timer").empty();                                    // Remove the timer from the HTML
                }
            $(".timer").html(count);                                    // Show the timer in the HTML
        }
    };

    
         
    

    function timedOut() {                                               // Function for Unaswered questions
        trackQ++;                                                       // Increment var trackQ (question tracker) by 1
        unAns++;                                                        // Increment var unAns (Unaswered questions) by 1
        $(".ques").html("Time's Up!");                                  // Push "time's up" to the HTML
        if (trackQ === 3) {                                             // Tracking correct answers in the array
            $(".ans1").html("The Correct Answer is " + answer1[6]);
        } else if (trackQ === 4) {
            $(".ans1").html("The Correct Answer is " + answer1[9]);
        } else if (trackQ === 5) {
            $(".ans1").html("The Correct Answer is " + answer2[4]);
        } else if (trackQ === 6) {
            $(".ans1").html("The Correct Answer is " + answer2[8]);
        } else if (trackQ === 7) {
            $(".ans1").html("The Correct Answer is " + answer2[11]);
        } else if (trackQ === 8) {
            $(".ans1").html("The Correct Answer is " + answer3[3]);
        } else if (trackQ === 9) {
            $(".ans1").html("The Correct Answer is " + answer3[5]);
        } else if (trackQ === 10) {
            $(".ans1").html("The Correct Answer is " + answer3[10]);
        } else if (trackQ === 11) {
            $(".ans1").html("The Correct Answer is " + answer4[7])
        }  
        $(".ans2").empty();                                             // Remove answer 2 from the HTML
        $(".ans3").empty();                                             // Remove answer 3 from the HTML
        $(".ans4").empty();                                             // Remove answer 4 from the HTML
        $(".timer").empty();                                            // Remove the timer from the HTML
        countOut = 3;                                                   // Count how long to show these values
         counterOut=setInterval(timer, 1000);                           // Set interval to 1 second
        function timer() {                                              // Timer function
            countOut--;                                                 // Decrement var Count by 1
                if (countOut === 0) {                                   // If the count gets to 0
                clearInterval(counterOut);                              // Stop the count
                askMe();                                                // Call the AskMe function
                timeMe();                                               // Call the timeMe function
                }        
            }
        };

        function correctAns() {                                         // Function called when an answer is clicked
            trackQ++;                                                   // Increment the question tracker
            $(".ques").empty();                                         // Removes the question from the HTML 
        if (trackQ === 3) {                                             // Correct answer tracking
            $(".ans1").html("The Correct Answer is " + answer1[6]);
        } else if (trackQ === 4) {
            $(".ans1").html("The Correct Answer is " + answer1[9]);
        } else if (trackQ === 5) {
            $(".ans1").html("The Correct Answer is " + answer2[4]);
        } else if (trackQ === 6) {
            $(".ans1").html("The Correct Answer is " + answer2[8]);
        } else if (trackQ === 7) {
            $(".ans1").html("The Correct Answer is " + answer2[11]);
        } else if (trackQ === 8) {
            $(".ans1").html("The Correct Answer is " + answer3[3]);
        } else if (trackQ === 9) {
            $(".ans1").html("The Correct Answer is " + answer3[5]);
        } else if (trackQ === 10) {
            $(".ans1").html("The Correct Answer is " + answer3[10]);
        } else if (trackQ === 11) {
            $(".ans1").html("The Correct Answer is " + answer4[7])
        }  
            $(".ans2").empty();                                         // Remove answer 2 from the HTML
            $(".ans3").empty();                                         // Remove answer 3 from the HTML
            $(".ans4").empty();                                         // Remove answer 4 from the HTML
            $(".timer").empty();                                        // Remove the timer from the HTML
            countCor = 6;                                               // Timer for showing these values
            counterCor=setInterval(timer, 1000);                        // Set interval to 1 second
            function timer() {                                          // Timer function
                countCor--;                                             // Decrement var countCor by 1
                    if (countCor === 0) {                               // If the count gets to 0
                    clearInterval(counterCor);                          // Stop the counter
                    askMe();                                            // Call the askMe function
                    timeMe();                                           // Call the timeMe function
                    }        
                }
            if (ansYes === 1) {                                         // If var ansYes is 1(correct answer for this question) 
                corAns++;                                               // Increment var corAns by 1
            } else if (ansYes === 0) {                                  // If var ansYes is 0 (incorrect answer for this question)
                notCorAns++;                                            // Increment var notCorAns by 1
            }
            };

    function askMe() {                                                  // Function to populate the questions/answers to the HTML
     $(".ques").html(JSON.stringify(currQuest[trackQ]))                 // The questions
        $(".ans1").html(JSON.stringify(answer1[trackQ]));               // Answer 1
        $(".ans2").html(JSON.stringify(answer2[trackQ]));               // Answer 2
        $(".ans3").html(JSON.stringify(answer3[trackQ]));               // Answer 3
        $(".ans4").html(JSON.stringify(answer4[trackQ]));               // Answer 4
        if (trackQ === 11)                                              // Question tracker
            finalScreen();                                              // Call the finalScreen function
    };

    function finalScreen() {                                            // Function to display your score
        clearInterval(counter);                                         // Make sure the counter is stopped
     //   clearInterval(counterOut); 
    //    clearInterval(counterCor);      
        $(".ques").remove();             // RE-ADD WITH RESTART BUTTON OR REPLACE DIV
        $(".ans1").remove();             // RE-ADD WITH RESTART BUTTON OR REPLACE DIV
        $(".ans2").html("Correct Answers: " + corAns);                  // Show how many questions were answered correctly
        $(".ans3").html("Incorrect Answers: " + notCorAns);             // Show how many questions were answered incorrectly
        $(".ans4").html("Unanswered Questions: " +unAns);               // Show how many questions timed out
        $(".timer").remove();             // RE-ADD WITH RESTART BUTTON OR REPLACE DIV
    };

    $(".startMe").on("click", function() {                              // Start button
        $(".startMe").hide();                                           // Hide the Start button after pressing it
        timeMe();                                                       // Call the timeMe function to start the countdown
        $(this).delay(999).queue(askMe);                                // Call the askMe function to populate the questions, delay until timer is onscreen
    });

    $(".ans1").on("click", function() {                                 // Answer 1 button
        clearInterval(counter);                                         // Make sure the timer is stopped
        if ((trackQ === 6) || (trackQ === 9)) {                         // Correct answer tracking
            ansYes = 1;
        } else {
            ansYes = 0;
        }
        correctAns();                                                   // Call the correctAns function
        $(".timer").empty();                                            // Remove the timer from the HTML
        $(".ans").empty();                                              // Remove the answers from the HTML
      });
  
      $(".ans2").on("click", function() {                               // Answer 2 button
        clearInterval(counter);                                         // Make sure the timer is stopped
        if ((trackQ === 4) || (trackQ === 8) || (trackQ === 11)) {      // Correct answer tracking
            ansYes = 1;
        } else {
            ansYes = 0;
        }
         correctAns();                                                  // Call the correctAns function
          $(".timer").empty();                                          // Remove the timer from the HTML
          $(".ans").empty();                                            // Remove the answers from the HTML
      });
  
      $(".ans3").on("click", function() {                               // Answer 3 button
        clearInterval(counter);                                         // Make sure the timer is stopped
        if ((trackQ === 3) || (trackQ === 5) || (trackQ === 10)) {      // Correct answer tracking
            ansYes = 1;                                             
        } else {
            ansYes = 0;
        }
          correctAns();                                                 // Call the correctAns function
          $(".timer").empty();                                          // Remove the timer from the HTML
          $(".ans").empty();                                            // Remove the answers from the HTML
      });
  
      $(".ans4").on("click", function() {                               // Answer 4 button
        clearInterval(counter);                                         // Make sure the timer is stopped
        if (trackQ === 7) {                                             // Correct answer tracking
            ansYes = 1;
        } else {
            ansYes = 0;
        }
          correctAns();                                                 // Call the correctAns function
          $(".timer").empty();                                          // Remove the timer from the HTML
          $(".ans").empty();                                            // Remove the answers from the HTML
      });


});


