
var trackQ = 2;
    

$(document).ready(function(){ 
    
    function timeMe() {
        trackQ++;
    
        var count = 6                                  // start counting from 30, 8 for testing
        var counter=setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            count = count-1;                                // decrement var count by 1
                if (count === 0) {                          // if the count gets to 0
                clearInterval(counter);                     // clearInterval
                timeMe();
                askMe();
            }
            $(".timer").html(count);
        }
    };


    
    function askMe() {                                      // function to populate the questions/answers to the HTML
        
        var currQuest = ["hold", "hold", "hold", "this is question 1", "this is question 2", "this is question 3", "this is question 4", "this is question 5", "this is question 6", "this is question 7", "this is question 8"];
        var answer1 = ["hold", "hold", "hold", "answer 1 2", "answer 1 3", "answer 1 4", "answer 1 5", "answer 1 6", "answer 1 7", "answer 1 8",];
        var answer2 = ["hold", "hold", "hold", "answer 2 1", "answer 2 2", "answer 2 3", "answer 2 4", "answer 2 5", "answer 2 6", "answer 2 7", "answer 2 8",];
        var answer3 = ["hold", "hold", "hold", "answer 3 1", "answer 3 2", "answer 3 3", "answer 3 4", "answer 3 5", "answer 3 6", "answer 3 7", "answer 3 8",];
        var answer4 = ["hold", "hold", "hold", "answer 4 1", "answer 4 2", "answer 4 3", "answer 4 4", "answer 4 5", "answer 4 6", "answer 4 7", "answer 4 8",];
    
        $(".ques").html(JSON.stringify(currQuest[trackQ]))
        $(".text1").html(JSON.stringify(answer1[trackQ]));
        $(".text2").html(JSON.stringify(answer2[trackQ])); 
        $(".text3").html(JSON.stringify(answer3[trackQ]));
        $(".text4").html(JSON.stringify(answer4[trackQ]));
    };








    $(".startB").on("click", function() {   // start button
        timeMe();                           // call the timeMe function to start the countdown
       $(this).delay(999).queue(askMe);    // call the askMe function to populate the questions, delay until timer is onscreen
    });








});















