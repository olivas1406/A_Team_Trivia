

function countD() {                                     // Function to count down
    var count = 10;                                     // start counting at 30
    var counter=setInterval(timer, 1000);               // set interval to 1 second
    function timer() {                                  // timer function
        count = count-1;                                // decrement var count by 1
            if (count === 0) {                          // if the count gets to 0
            clearInterval(counter);                     // clear the interval
            $(".timer").html("<h2>Time's Up!</h2>");    // push 'time's up' to the HTML
                                                        //
                                                        // CALL FUNCTION TO TRANSITION TO THE NEXT SCREEN
            return;
            }
            // } else if (click on a, b, c, or d) {
            // CALL FUNCTION TO TRANSITON TO THE NEXT SCREEN 
            // }
        $(".timer").html("Time Remaining: " + count);
    }
}




$(".startB").on("click", function() {
    countD();  
});

















