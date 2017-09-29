

    
    // var qa = {


    //   Q1 : { 
    //       Q : "Where in the world is Carmen San Diego?",
    //       A : ["nvjbhj","klajsd", "asdf","sdfg", "werg"]
           
    //        },

    //   Q2 : {
    //           Q : "why did the chicken cross the road?",
    //           A : ["asdf","klajsd", "asdf", "sdfg", "werg"]

    //          },   

    //   Q3 : { 
    //            Q : "asdfasd",
    //            A :  ["asdf",  "klajsd", "asdf", "sdfg", "werg"]
             
    //         },

    //   Q4 : { 
    //           Q : "asdf",
    //           A : ["asdf",  "klajsd", "asdf", "sdfg", "werg"]
            
    //         },

    //   Q5 : {    
    //           Q : "lkj"
    //           A : ["asdf",  "klajsd", "asdf", "sdfg", "werg"] 
        
    //     } 
    // };

   
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
      console.log(startTime);

    }

    function start() {
      
      renderTime();
      countdown();
    }
  
  $("#start").on("click", start);
   
// function start() {

//   $("#button").on("click")
  

// };

// function countdown() {
//   var interval = setIntravel(decrament, 1000);
// };

// function decrament() {
//   number--;
//   $("#show-number").html("<h2>" + number + "</h2>");
//   if(number === 0) {
  
//     end();

//   }
// };


// function end() {
//   // show # of correct/wrong (or not) answered

//   // say game over
//   $("#gameover").html("Game over!!!")
// }

// // still need to work on the render function.... 
// function renderQA() {
//   for(var i = 0; i <= 5; i++) {
//     $(":radio").append("<div>")
//   }
// }

// countdown();
// start();


// // where in the world is carman san diego? A: Normandy, Taipei, Kulam
// // why did the chicken cross the road?
// // 