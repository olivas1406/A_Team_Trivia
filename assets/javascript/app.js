




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




/*
    function htmlShow() {
        var x = $(".r3c1");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "none";
        }
    }
    */

/*
    function buttons() {
    $(".ans").html('<input type="radio" class="radioButtonA" value="answer 1">',
    '<input type="radio" class="radioButtonB" value="answer 2">',
    '<input type="radio" class="radioButtonC value="answer 3">',
    '<input type="radio" class="radioButtonD" value="answer 4">');
    }
*/




  $(".r3c1").hide();                        // hides the questions/answers in the HTML

    $(".startB").on("click", function() {   // start button
        timeMe();                           // calls the timeMe function
        $(".r3c1").toggle();                // shows the questions/answers in the HTML
    
    });





});






