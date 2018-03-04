

    var currQuest = ["this is test question 1", "this is test question 2", "this is test question 3"];
    var answer1 = ["answer 1-1", "answer 1-2", "answer 1-3"];
    var answer2 = ["answer 2-1", "answer 2-2", "answer 2-3"];
    var answer3 = ["answer 3-1", "answer 3-2", "answer 3-3"];
    var answer4 = ["answer 4-1", "answer 4-2", "answer 4-3"];
    var unAns = 0;               // variable to hold the number of unanswered questions
    var corAns = 0;              // variable to hold the number of correclty answered questions
    var notCorAns = 0;         // variable to hold the number of incorrectly answered questions
    var ansYes = 1; 

$(document).ready(function(){ 

    function timeMe() {
        var count = 8;                                      // start counting from 30, 8 for testing
        var counter=setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            count = count-1;                                // decrement var count by 1
                if (count === 0) {                          // if the count gets to 0
                clearInterval(counter);                     // clearInterval
                $(".timer").empty();                    // empty the timer div
                $(".texty").html("Time's up");                      // push 'time's up' to the HTML 
                $(".ques").empty();                         // empty the ques div
                $(".ans").empty();                          // empty the ans div
              
                correctAns();                               // call the correctAns function
                }
            $(".timer").html(count);
        }
    }

    function askMe() {                                      // function to populate the questions/answers to the HTML
        $(".ques").html(currQuest[0]);
        $(".text1").html(answer1[0]);
        $(".text2").html(answer2[0]);
        $(".text3").html(answer3[0]);
        $(".text4").html(answer4[0]);
        
    }


    function correctAns() {
        $(".ques").html("correct answer goes here");
        var count = 6;                                      // start counting from 30, 8 for testing
        var counter=setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            count = count-1;                                // decrement var count by 1
                if (count === 0) {                          // if the count gets to 0
                clearInterval(counter);                     // clearInterval
                $(".ques").empty();
                $(".timer").empty();
                timeMe();
                $(this).delay(999).queue(askMe);
                }
                if (ansYes === 0) {
                    notCorAns++;
                } else if (ansYes === 1) {
                    corAns++;
                } else {
                    unAns++;
                }
        }
    }
    



    $(".startB").on("click", function() {   // start button
        timeMe();
        $(this).delay(999).queue(askMe);
    });



});





