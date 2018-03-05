




$(document).ready(function(){ 

    function timeMe() {
        var count = 5;                                      // start counting from 30
        var counter=setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            count = count-1;                                // decrement var count by 1
                if (count === 0) {                          // if the count gets to 0
                clearInterval(counter);                     // clearInterval
                $(".timer").empty();                    // empty the timer div
                $(".texty").html("Time's up");                      // push 'time's up' to the HTML 
                                   // empty the ans div
              
                correctAns();                               // call the correctAns function
                }
            $(".timer").html(count);
        }
    }






    $(".startB").on("click", function() {   // start button
        timeMe();
        $(this).delay(999).queue(askMe);
    });



});






