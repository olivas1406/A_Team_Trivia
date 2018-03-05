




var ans1 = toString($("input[name=radioButtonA]:checked").val());

//var ans2 = $("input[name=radioButtonB]").val()
//var ans3 = $("input[name=radioButtonC]").val()
//var ans4 = $("input[name=radioButtonD]").val()



$(document).ready(function(){ 
    


    function timeMe() {
        $(".startB").empty();
        $(".container").css("height", "900px");
        var count = 5;                                      // start counting from 30
        var counter=setInterval(timer, 1000);               // set interval to 1 second
        function timer() {                                  // timer function
            count = count-1;                                // decrement var count by 1
                if (count === 0) {                          // if the count gets to 0
                clearInterval(counter);                     // clearInterval
                $(".timer").empty();                        // empty the timer div
         
                }
         //   $(".timer").html(count);
            $("h1").html(count);
        }
    }

        





    $(".r3c1").hide();                        // hides the questions/answers in the HTML



    $(".startB").on("click", function() {   // start button
        timeMe();                           // calls the timeMe function
        $(".r3c1").toggle();                // shows the questions/answers in the HTML
    
    });




});






