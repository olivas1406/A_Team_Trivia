


 var currQuest = ["hold", "hold", "hold", "When did the first episode of the A-Team air?", "The character played by Mr T was named B.A. Baracus, what did the B.A. stand for?", "3 of the 4 members of the A-Team were Green Berets, who was not?", "The A-Team was pursued by the Government for a crime they didn't commit, what was the crime?", "How many on-screen deaths were there on the show?", "What was 'Howlin Mad' Murdock's first name?", "About how much did Mr T's gold weigh?", "How many times does Mr T say 'I pity the fool'?", "What kind of van did the A-Tea use?"];
 var answer1 = ["hold", "hold", "hold", "January 23rd, 1983", "Bad Attitude", "B.A. Baracus", "Grand Theft Auto and Larceny", "0", "James", "10lbs", "432", "Chevrolet Astro"];
 var answer2 = ["hold", "hold", "hold", "March 8th, 1987", "Bad Ass", "'Howlin Mad' Murdock", "Bank Robbery and Murder", "1", "Michael", "24lbs", "38", "Chevrolet Express"];
 var answer3 = ["hold", "hold", "hold", "February 17th, 1984", "Benjamin Allen", "Face", "Insubordination", "129", "It was never revealed", "36lbs", "0", "Ford Econoline"];
 var answer4 = ["hold", "hold", "hold", "January 15th, 1982", "Bosco Andrew", "Hannibal", "Treason", "273", "Howling Mad", "44lbs", "1,542", "GMC Vandura"];


var unAns = 0;                                                          // Variable for Unaswered questions
var corAns = 0;                                                         // Variable for Correctly answered questions
var notCorAns = 0;                                                      // Variable for Incorrectly answered questions
var ansYes = 9;                                                         // Variable to determine answers
var trackQ = 3;                                                         // Variable to increment questions/answers

$(document).ready(function(){ 

    function timeMe() {                                                 // Main game timer
        console.log(trackQ);                                            // T/S
        count = 30;                                                      // Start counting from 30, 6 for testing
        counter=setInterval(timer, 1000);                               // Set interval to 1 second
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
        if (trackQ === 4) {                                             // Tracking correct answers in the array
            $(".ans1").html("The Correct Answer is " + answer1[3]).append("<br><br><img class='popImg' src='./assets/images/a2.jpg'/>");
        } else if (trackQ === 5) {
            $(".ans1").html("The Correct Answer is " + answer1[4]).append("<br><br><img class='popImg' src='./assets/images/a5.jpg'/>");
        } else if (trackQ === 6) {
            $(".ans1").html("The Correct Answer is " + answer2[5]).append("<br><br><img class='popImg' src='./assets/images/a4.png'/>");
        } else if (trackQ === 7) {
            $(".ans1").html("The Correct Answer is " + answer2[6]).append("<br><br><img class='popImg' src='./assets/images/a4.jpg'/>");
        } else if (trackQ === 8) {
            $(".ans1").html("The Correct Answer is " + answer2[7]).append("<br><br><img class='popImg' src='./assets/images/a1.jpg'/>");
        } else if (trackQ === 9) {
            $(".ans1").html("The Correct Answer is " + answer3[8]).append("<br><br><img class='popImg' src='./assets/images/a3.jpg'/>");
        } else if (trackQ === 10) {
            $(".ans1").html("The Correct Answer is " + answer3[9]).append("<br><br><img class='popImg' src='./assets/images/a8.jpg'/>");
        } else if (trackQ === 11) {
            $(".ans1").html("The Correct Answer is " + answer3[10]).append("<br><br><img class='popImg' src='./assets/images/a7.jpg'/>");
        } else if (trackQ === 12) {
            $(".ans1").html("The Correct Answer is " + answer4[11]).append("<br><br><img class='popImg' src='./assets/images/avan.jpg'/>");
        }  
        $(".ans2").empty();                                             // Remove answer 2 from the HTML
        $(".ans3").empty();                                             // Remove answer 3 from the HTML
        $(".ans4").empty();                                             // Remove answer 4 from the HTML
        $(".timer").empty();                                            // Remove the timer from the HTML
        countOut = 4;                                                   // Count how long to show these values
        counterOut=setInterval(timer, 1000);                            // Set interval to 1 second
        function timer() {                                              // Timer function
            countOut--;                                                 // Decrement var Count by 1
                if (countOut === 0) {                                   // If the count gets to 0
                clearInterval(counterOut);                              // Stop the count
                askMe();                                                // Call the AskMe function
                timeMe();                                               // Call the timeMe function
                }        
        }
    };

    function correctAns() {                                             // Function called when an answer is clicked
        trackQ++;                                                       // Increment the question tracker
        $(".ques").empty();                                             // Removes the question from the HTML 
        if (trackQ === 4) {                                             // Tracking correct answers in the array
            $(".ans1").html("The Correct Answer is " + answer1[3]).append("<br><br><img class='popImg' src='./assets/images/a2.jpg'/>");
        } else if (trackQ === 5) {
            $(".ans1").html("The Correct Answer is " + answer1[4]).append("<br><br><img class='popImg' src='./assets/images/a5.jpg'/>");
        } else if (trackQ === 6) {
            $(".ans1").html("The Correct Answer is " + answer2[5]).append("<br><br><img class='popImg' src='./assets/images/a4.png'/>");
        } else if (trackQ === 7) {
            $(".ans1").html("The Correct Answer is " + answer2[6]).append("<br><br><img class='popImg' src='./assets/images/a4.jpg'/>");
        } else if (trackQ === 8) {
            $(".ans1").html("The Correct Answer is " + answer2[7]).append("<br><br><img class='popImg' src='./assets/images/a1.jpg'/>");
        } else if (trackQ === 9) {
            $(".ans1").html("The Correct Answer is " + answer3[8]).append("<br><br><img class='popImg' src='./assets/images/a3.jpg'/>");
        } else if (trackQ === 10) {
            $(".ans1").html("The Correct Answer is " + answer3[9]).append("<br><br><img class='popImg' src='./assets/images/a8.jpg'/>");
        } else if (trackQ === 11) {
            $(".ans1").html("The Correct Answer is " + answer3[10]).append("<br><br><img class='popImg' src='./assets/images/a7.jpg'/>");
        } else if (trackQ === 12) {
            $(".ans1").html("The Correct Answer is " + answer4[11]).append("<br><br><img class='popImg' src='./assets/images/avan.jpg'/>");
        }
            $(".ans2").empty();                                         // Remove answer 2 from the HTML
            $(".ans3").empty();                                         // Remove answer 3 from the HTML
            $(".ans4").empty();                                         // Remove answer 4 from the HTML
            $(".timer").empty();                                        // Remove the timer from the HTML
            countCor = 4;                                               // Timer for showing these values
            counterCor=setInterval(timer, 1000);                        // Set interval to 1 second
                function timer() {                                      // Timer function
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
  
    $(".ans2").on("click", function() {                                 // Answer 2 button
        clearInterval(counter);                                         // Make sure the timer is stopped
        if ((trackQ === 4) || (trackQ === 8) || (trackQ === 11)) {      // Correct answer tracking
            ansYes = 1;
        } else {
            ansYes = 0;
        }
        correctAns();                                                   // Call the correctAns function
        $(".timer").empty();                                            // Remove the timer from the HTML
        $(".ans").empty();                                              // Remove the answers from the HTML
    });
  
    $(".ans3").on("click", function() {                                 // Answer 3 button
        clearInterval(counter);                                         // Make sure the timer is stopped
        if ((trackQ === 3) || (trackQ === 5) || (trackQ === 10)) {      // Correct answer tracking
            ansYes = 1;                                             
        } else {
            ansYes = 0;
        }
        correctAns();                                                   // Call the correctAns function
        $(".timer").empty();                                            // Remove the timer from the HTML
        $(".ans").empty();                                              // Remove the answers from the HTML
    });
  
    $(".ans4").on("click", function() {                                 // Answer 4 button
        clearInterval(counter);                                         // Make sure the timer is stopped
        if (trackQ === 7) {                                             // Correct answer tracking
            ansYes = 1;
        } else {
            ansYes = 0;
        }
        correctAns();                                                   // Call the correctAns function
        $(".timer").empty();                                            // Remove the timer from the HTML
        $(".ans").empty();                                              // Remove the answers from the HTML
    });

});


