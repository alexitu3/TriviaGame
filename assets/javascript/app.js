

    
    var q = {

        questionAnswers: { 
      Q1 : { 
          Q : "Where in the world is Carmen San Diego?",
          A : ["answer 1","answer 2", "answer 3","answer 4", "answer 5"]
           
           },

      Q2 : {
              Q : "why did the chicken cross the road?",
              A : ["answer 1","answer 2", "answer 3", "answer 4", "answer 5"]

             },   

      Q3 : { 
               Q : "question3",
               A :  ["answer 1",  "answer 2", "answer 3", "answer4", "answer5"]
             
            },

      Q4 : { 
              Q : "question4",
              A : ["answer 1",  "answer 2", "answer 3", "answer4", "answer5"]
            
            },

      Q5 : {    
              Q : "question5",
              A : ["answer 1",  "answer 2", "answer 3", "answer4", "answer5"] 
            } 
          },


}
// i done really know how to sort through this object, so I wanted to make it an array but ran out of time.
// I also didnt want to hard code everything and was trying many different ways not too. 
// still need to work on the render function.... 
// I think im going to change my data into an array, so then I can iterate through each element allowing me to update them to the html each time.
// use the 
// function renderQA() {
//  var objectKeys = Object.keys()
//  console.log(obj);
// for (var key in obj){
    
//   console.log(obj);


    // if (key === Q1) {

    // }

    // if (key === Q2) {

    // }

    // if (key === Q3) {

    // }

    // if (key === Q4) {

    // }

    // if (key === Q5) {

    // }



// }
// }




  // for(var i = 0; i <= q.length; i++) {
   

  //   var question

  //   $(":radio").append("<div>")
//   }
  




    var startTime = 12;
    var interval;
    function countdown() {
      
      interval = setInterval(decrement, 1000)

    }

    function decrement() {
      startTime--;
      renderTime();
      $("#show-number").html("<h2>" + startTime + "</h2>");
      if (startTime === 0) {
       clearInterval(interval)
        alert("Times up")
      }
    }

    function renderTime() {
      

    }

    function start() {
      
      renderTime();
      countdown();
    }
  
  $("#start").on("click", start);
   
function start() {

  $("#button").on("click")
  


// this was to add up the answers...
function end() {
  // show # of correct/wrong (or not) answered

  // say game over
  $("#gameover").html("Game over!!!")
}



countdown();
start();

