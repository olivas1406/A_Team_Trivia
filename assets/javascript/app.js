

var correctAns = 0;
var inCorrectAns = 0;
var unAns = 0;

$(document).ready(function(){ 
    


    function timeMe() {
        $(".startB").empty();
        $(".container").css("height", "900px");
        var count = 5;                                      // start counting from 30
        var counter=setInterval(timer, 1000);              // set interval to 1 second
        function timer() {                                  // timer function
            count = count-1;                                // decrement var count by 1
                if (count === 0) {                          // if the count gets to 0
                clearInterval(counter);                     // clearInterval
                nextScreen();
                }
            $("h1").html(count);
        }
    };

   function nextScreen() {
     //   $("h1").html("Time's Up!");
        $(".r3c1").hide();  
        $(".score1").html("Correct Answers: " + correctAns).css({
            "text-align" : "center",
            "font-size" : "20px",
            "margin-top" : "5%"
        });
        $(".score2").html(" Incorrect Answers: " + inCorrectAns).css({
            "text-align" : "center",
            "font-size" : "20px",
        });
        $(".score3").html(" Unaswered Questions: " + unAns).css({
            "text-align" : "center",
            "font-size" : "20px",
        });
        $(".startB").html("<h3>&nbsp; RESTART &nbsp;</h3>");
        $(".startB").on("click", function() {   // start button
            timeMe();                           // calls the timeMe function
            $(".r3c1").show();                // shows the questions/answers in the HTML
            $(".score1, .score2, .score3").empty();
            $(".container").css("height", "747px");

        })
    };

        

    $(".r3c1").hide();                        // hides the questions/answers in the HTML

    $(".startB").on("click", function() {   // start button
        timeMe();                           // calls the timeMe function
        $(".r3c1").toggle();                // shows the questions/answers in the HTML
    
    });




});






