

$(document).ready(function(){ 
    // Arrays with questions/answers
    var currQuest = ["When did the first episode of the A-Team air?", "The character played by Mr T was named B.A. Baracus, what did the B.A. stand for?", "3 of the 4 members of the A-Team were Green Berets, who was not?", "The A-Team was pursued by the Government for a crime they didn't commit, what was the crime?", "How many on-screen deaths were there on the show?", "What was 'Howlin Mad' Murdock's first name?", "About how much did Mr T's gold weigh?", "How many times does Mr T say 'I pity the fool'?", "What kind of van did the A-Tea use?"];
    var answer1 = ["January 15th, 1982", "Bad Ass", "B.A. Baracus", "Grand Theft Auto and Larceny", "0", "It was never revealed", "10lbs", "432", "Chevrolet Astro"];
    var answer2 = ["March 8th, 1987", "Bad Attitude", "'Howlin Mad' Murdock", "Treason", "1", "Michael", "24lbs", "38", "GMC Vandura"];
    var answer3 = ["February 17th, 1984", "Benjamin Allen", "Face", "Insubordination", "129", "James", "36lbs", "0", "Ford Econoline"];
    var answer4 = ["January 23rd, 1983", "Bosco Andrew", "Hannibal", "Bank Robbery and Murder", "273", "Howling Mad", "44lbs", "1,542", "Chevrolet Express"];
    var unAns = 0;                                                                      // Variable for Unaswered questions
    var corAns = 0;                                                                     // Variable for Correctly answered questions
    var notCorAns = 0;                                                                  // Variable for Incorrectly answered questions
    var ansYes = 0;                                                                     // Variable to determine answers
    var trackQ = 0;                                                                     // Variable to track the question number
    var corrCountUsed = 0;                                                              // Variable to determine counter use
    var timeCountUsed = 0;                                                              // Variable to determine counter use

    function timeMe() {                                                                 // Main game timer
        console.log("trackQ: " + trackQ, "ansYes: " + ansYes);                          // T/S
        count = 30;                                                                     // Start counting from 30, 6 for testing
        counter=setInterval(timer, 1000);                                               // Set interval to 1 second
            function timer() {                                                          // Timer function
            count--;                                                                    // Decrement var Count by 1
                if (count === 0) {                                                      // If the count gets to 0
                    clearInterval(counter);                                             // clearInterval
                    timedOut();                                                         // Call the timedOut function
                    $(".timer").empty();                                                // Remove the timer from the HTML
                }
            $(".timer").html(count);                                                    // Show the timer in the HTML
            }
    };

    function askMe() {                                                                  // Function to populate the questions/answers to the HTML
        $(".useMe").hide();
        $(".ques").html(JSON.stringify(currQuest[trackQ]))                              // The questions
        $(".ans1").html(JSON.stringify(answer1[trackQ]));                               // Answer 1
        $(".ans2").html(JSON.stringify(answer2[trackQ]));                               // Answer 2
        $(".ans3").html(JSON.stringify(answer3[trackQ]));                               // Answer 3
        $(".ans4").html(JSON.stringify(answer4[trackQ]));                               // Answer 4
        $(".swer").css("border", "solid red 2px");                                      // Create a red border around the answers
            if (trackQ === 9)                                                           // Question tracker
                finalScreen();                                                          // Call the finalScreen function
    };

    function timedOut() {                                                               // Function for Unaswered questions
        $(".useMe").show();
        timeCountUsed = 1
        trackQ++;                                                                       // Increment var trackQ (question tracker) by 1
        unAns++;                                                                        // Increment var unAns (Unaswered questions) by 1
        $(".swer").css("border", "none");                                               // Remove the border from the answers
        $(".ques").html("Time's Up!");                                                  // Push "time's up" to the HTML
        if (trackQ === 1) {                                                             // Tracking correct answers in the array
            $(".useMe").html("The Correct Answer is " + answer4[0]).append("<br><br><img class='popImg' src='./assets/images/a2.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 2) {
            $(".useMe").html("The Correct Answer is " + answer2[1]).append("<br><br><img class='popImg' src='./assets/images/a5.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 3) {
            $(".useMe").html("The Correct Answer is " + answer2[2]).append("<br><br><img class='popImg' src='./assets/images/murdock.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 4) {
            $(".useMe").html("The Correct Answer is " + answer4[3]).append("<br><br><img class='popImg' src='./assets/images/a4.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 5) {
            $(".useMe").html("The Correct Answer is " + answer2[4]).append("<br><br><img class='popImg' src='./assets/images/a1.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 6) {
            $(".useMe").html("The Correct Answer is " + answer1[5]).append("<br><br><img class='popImg' src='./assets/images/a7.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 7) {
            $(".useMe").html("The Correct Answer is " + answer3[6]).append("<br><br><img class='popImg' src='./assets/images/bg.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 8) {
            $(".useMe").html("The Correct Answer is " + answer3[7]).append("<br><br><img class='popImg' src='./assets/images/a8.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 9) {
            $(".useMe").html("The Correct Answer is " + answer2[8]).append("<br><br><img class='popImg' src='./assets/images/avan.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        }  
        $(".ans1").empty();
        $(".ans2").empty();                                                             // Remove answer 2 from the HTML
        $(".ans3").empty();                                                             // Remove answer 3 from the HTML
        $(".ans4").empty();                                                             // Remove answer 4 from the HTML
        $(".timer").css("color", "white");                                              // Remove the timer from the HTML
        counterCor = 0;                                                                 // This exists in case correctAns() is never called
        countOut = 5;                                                                   // Count how long to show these values
        counterOut=setInterval(timer, 1000);                                            // Set interval to 1 second
            function timer() {                                                          // Timer function
                countOut--;                                                                 // Decrement var Count by 1
                if (countOut === 0) {                                                   // If the count gets to 0
                    clearInterval(counterOut);                                          // Stop the count
                    askMe();                                                            // Call the AskMe function
                    timeMe();                                                           // Call the timeMe function
                }        
            }
    };

    function correctAns() {                                                             // Function called when an answer is clicked
        $(".useMe").show();
        corrCountUsed = 1                                                               
        trackQ++;                                                                       // Increment the question tracker
        console.log("Correct: " + corAns, "Wrong: " + notCorAns, "TrackQ: " + trackQ, "ansYes: " + ansYes);
        $(".ques").empty();                                                             // Removes the question from the HTML 
        $(".swer").css("border", "none");                                               // Remove the border from the answers
        if (trackQ === 1) {                                                             // Tracking correct answers in the array
            $(".useMe").html("The Correct Answer is " + answer4[0]).append("<br><br><img class='popImg' src='./assets/images/a2.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 2) {
            $(".useMe").html("The Correct Answer is " + answer2[1]).append("<br><br><img class='popImg' src='./assets/images/a5.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 3) {
            $(".useMe").html("The Correct Answer is " + answer2[2]).append("<br><br><img class='popImg' src='./assets/images/murdock.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 4) {
            $(".useMe").html("The Correct Answer is " + answer4[3]).append("<br><br><img class='popImg' src='./assets/images/a4.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 5) {
            $(".useMe").html("The Correct Answer is " + answer2[4]).append("<br><br><img class='popImg' src='./assets/images/a1.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 6) {      
            $(".useMe").html("The Correct Answer is " + answer1[5]).append("<br><br><img class='popImg' src='./assets/images/a7.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 7) {
            $(".useMe").html("The Correct Answer is " + answer3[6]).append("<br><br><img class='popImg' src='./assets/images/bg.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 8) {
            $(".useMe").html("The Correct Answer is " + answer3[7]).append("<br><br><img class='popImg' src='./assets/images/a8.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        } else if (trackQ === 9) {
            $(".useMe").html("The Correct Answer is " + answer2[8]).append("<br><br><img class='popImg' src='./assets/images/avan.jpg'/>");
            $(".useMe").css("padding", "2%");                                            // Add padding to the picture
        }
        $(".ans1").empty();
        $(".ans2").empty();                                                             // Remove answer 2 from the HTML
        $(".ans3").empty();                                                             // Remove answer 3 from the HTML
        $(".ans4").empty();                                                             // Remove answer 4 from the HTML
        $(".timer").html("0");                                                          // Remove the timer from the HTML
        counterOut = 0;                                                                 // This exists in case timedOut() is never called
        countCor = 5;                                                                   // Timer for showing these values
        counterCor=setInterval(timer, 1000);                                            // Set interval to 1 second
            function timer() {                                                          // Timer function
                countCor--;                                                             // Decrement var countCor by 1
                if (countCor === 0) {                                                   // If the count gets to 0
                clearInterval(counterCor);                                              // Stop the counter
                askMe();                                                                // Call the askMe function
                timeMe();                                                               // Call the timeMe function
                }        
            }
            if (ansYes === 1) {                                                         // If var ansYes is 1(correct answer for this question) 
            corAns++;                                                                   // Increment var corAns by 1
            } else if (ansYes === 0) {                                                  // If var ansYes is 0 (incorrect answer for this question)
            notCorAns++;                                                                // Increment var notCorAns by 1
            }
    };

    function finalScreen() {                                                            // Function to display your score
        $(".useMe").hide();
        clearInterval(counter);                                                         // Make sure the counter is stopped
        if (corrCountUsed === 1) {
            clearInterval(counterOut); 
        }
        if (timeCountUsed === 1) {
            clearInterval(counterCor); 
        }
        $(".ques").hide();                                                              // .show() WITH RESTART BUTTON
        $(".ans1").hide();                                                              // .show() WITH RESTART BUTTON
        $(".ans2").html("Incorrect Answers: " + notCorAns);                               // Show how many questions were answered correctly
        $(".ans2").css({
            "color": "black",                                                           // Change to font to black
            "background" : "red",                                                       // Change the text background to red
        });
        $(".ans3").html("Correct Answers: " + corAns);                                // Show how many questions were answered incorrectly
        $(".ans3").css({
            "color": "black",                                                           // Change to font to black
            "background" : "red",                                                       // Change the text background to red
        });
        $(".ans4").html("Unanswered Questions: " +unAns);                               // Show how many questions timed out
        $(".ans4").css({
            "color": "black",                                                           // Change to font to black
            "background" : "red",                                                       // Change the text background to red
        });
        $(".timer").hide();                                                             // .show() WITH RESTART BUTTON
        $(".swer").css("border", "none");                                               // Remove the border from the answers
        stopMe();
    };

    function stopMe() {
        event.stopPropagation();
    }

    $(".useMe").hide();

    $(".startMe").on("click", function() {                                              // Start button
        $(".startMe").hide();                                                           // Hide the Start button after pressing it
        timeMe();                                                                       // Call the timeMe function to start the countdown
        $(this).delay(999).queue(askMe);                                                // Call the askMe function to populate the questions, delay until timer is onscreen
    });

    $(".ans1").on("click", function() {                                                 // Answer 1 button
        clearInterval(counter);                                                         // Make sure the timer is stopped
        if (trackQ === 5) {                                                             // Question tracker
            ansYes = 1;                                                                 // Set var ansYes to 1
        } else {                                                                    
            ansYes = 0;                                                                 // Set var ansYes to 0
        }
        correctAns();                                                                   // Call the correctAns function
        $(".timer").css("color", "white");                                              // Remove the timer from the HTML
        $(".ans").empty();                                                              // Remove the answers from the HTML
    });

    $(".ans2").on("click", function() {                                                 // Answer 2 button
        clearInterval(counter);                                                         // Make sure the timer is stopped
        if ((trackQ === 1) || (trackQ === 2) || (trackQ === 4) || (trackQ === 8)) {     // Question tracker
            ansYes = 1;                                                                 // Set var ansYes to 1
        } else {                                                                    
            ansYes = 0;                                                                 // Set var ansYes to 0
        }
        correctAns();                                                                   // Call the correctAns function
        $(".timer").css("color", "white");                                              // Remove the timer from the HTML
        $(".ans").empty();                                                              // Remove the answers from the HTML
    });

    $(".ans3").on("click", function() {                                                 // Answer 3 button
        clearInterval(counter);                                                         // Make sure the timer is stopped
        if ((trackQ === 6) || (trackQ === 7)) {                                         // Question tracker
            ansYes = 1;                                                                 // Set var ansYes to 1
        } else {                                                                  
            ansYes = 0;                                                                 // Set var ansYes to 0
        }
        correctAns();                                                                   // Call the correctAns function
        $(".timer").css("color", "white");                                              // Remove the timer from the HTML
        $(".ans").empty();                                                              // Remove the answers from the HTML
    });

    $(".ans4").on("click", function() {                                                 // Answer 4 button
        clearInterval(counter);                                                         // Make sure the timer is stopped
        if ((trackQ === 0) || (trackQ === 3)) {                                         // Question tracker
            ansYes = 1;                                                                 // Set var ansYes to 1
        } else {
            ansYes = 0;                                                                 // Set var ansYes to 0
        }
        correctAns();                                                                   // Call the correctAns function
        $(".timer").css("color", "white");                                              // Remove the timer from the HTML
        $(".ans").empty();                                                              // Remove the answers from the HTML
    });
});




