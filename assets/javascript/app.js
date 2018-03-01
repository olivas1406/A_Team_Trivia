
/*

1 on start button press

    $(".startB").on("click", function() {
    gameOn();
    questNum++
});



2 call timer function
3 call questions and answers with 999 delay function
   increment var questNum   <-- use var questNum to reference questions/answers

4   ///// MAKE THIS A FUNCTION
if timer === 0
        unAns++
        blank out the html  <-- if you remove the div you have to re-add during correctAns() and nextScreen()
        correctAns() 

    else if correct answer given
        correctAns++
        blank out the html
        correctAns()  

    else if incorrect answer given
        incorrectAns++
        blank out the html 
        correctAns()   
///// MAKE THIS A FUNCTION

//////////////////////////////////////////////////////////
function correctAns() {

    var count = 7;                                     // start counting at 30
    var counter=setInterval(timer, 1000);               // set interval to 1 second
    function timer() {                                  // timer function
        count = count-1;                                // decrement var count by 1
            if (count === 0) {                          // if the count gets to 0
            clearInterval(counter);     
            nextScreen();
    
    // display correct answer to HTML
    // after 7 seconds transition to next screen
    // nextScreen()

}

function nextScreen() {
    recreate divs or re-add text to HTML
    call timer
    call questions and answers
    call IF/ELSE function
}

function gameOn() {
    countD();                                   // Call the countdown function
    $(this).delay(999).queue(createWords);      // Delay the question/answers until the countdown pops up
}

function countD() {                                     // Function to count down
    var count = 5;                                     // start counting at 30
    var counter=setInterval(timer, 1000);               // set interval to 1 second
    function timer() {                                  // timer function
        count = count-1;                                // decrement var count by 1
            if (count === 0) {                          // if the count gets to 0
            clearInterval(counter);                     // clear the interval
            $(".timer").html("<h2>Time's Up!</h2>");    // push 'time's up' to the HTML
            $(".ques").remove();    
            $(".ans").remove();    
            correctAns();
           
            
                                                        
            return;
            }
            // } else if (click on a, b, c, or d) {
            
            // }
        $(".timer").html("Time Remaining: " + count);
        
    }
}

function createWords() {
    $(".ques").append("<h2>The question goes here</h2>");
    $(".text1").append("<h4>Answer 1 goes here</h4>");
    $(".text2").append("<h4>Answer 2 goes here</h4>"); 
    $(".text3").append("<h4>Answer 3 goes here</h4>");
    $(".text4").append("<h4>Answer 4 goes here</h4>"); 

*/





/*

function countD() {                                     // Function to count down
    var count = 5;                                     // start counting at 30
    var counter=setInterval(timer, 1000);               // set interval to 1 second
    function timer() {                                  // timer function
        count = count-1;                                // decrement var count by 1
            if (count === 0) {                          // if the count gets to 0
            clearInterval(counter);                     // clear the interval
            $(".timer").html("<h2>Time's Up!</h2>");    // push 'time's up' to the HTML
            $(".ques").remove();    
            $(".ans").remove();    
            correctAns();
           
            
                                                        // CALL FUNCTION TO TRANSITION TO THE NEXT SCREEN
            return;
            }
            // } else if (click on a, b, c, or d) {
            // CALL FUNCTION TO TRANSITON TO THE NEXT SCREEN 
            // }
        $(".timer").html("Time Remaining: " + count);
        
    }
}

function createWords() {
    $(".ques").append("<h2>The question goes here</h2>");
    $(".text1").append("<h4>Answer 1 goes here</h4>");
    $(".text2").append("<h4>Answer 2 goes here</h4>"); 
    $(".text3").append("<h4>Answer 3 goes here</h4>");
    $(".text4").append("<h4>Answer 4 goes here</h4>"); 

}

function correctAns() {
    $(".r2c1").append("<h2> Push the array or object info with the correct answer  </h2>");
    $(".r2c1").css({
    "background" : "white",
    "text-align" : "center"
});
   // $(".ques").append("push the array or object info with the correct answer"); // .ques was removed in the previous function - just wipe the HTML
}

function gameOn() {
    countD();                                   // Call the countdown function
    $(this).delay(999).queue(createWords);      // Delay the question/answers until the countdown pops up
}

    



$(".startB").on("click", function() {
    gameOn();
});

*/















