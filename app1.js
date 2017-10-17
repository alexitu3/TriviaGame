

    // var timer = 120
    
var qa = {
  Q1 : { 
      Q : "Where in the world is Carmen San Diego?",
      A : ["san Diego", "Hong Kong", "London",  "Paris",  "Rio"],
      correct: "Hong Kong"
       
       },

  Q2 : {
          Q : "why did the chicken cross the road?",
          A : ["To get to the other side", "To go to KFC", "Because he was too chicken",  "dsfg",  "werg"],
          correct: "Answer2"
          
         },   

  Q3 : { 
           Q : "asdfasd",
           A :  ["asdf",  "klajsd", "asdf",  "sdfg", "werg"],
          correct: "Answer3"
        } 
    
};



function appendQA() {
  for (var key in qa){
      
    $("#questions").append('<br></br><div>' + qa[key].Q + '</div><br></br>');
    
    for (var i = 0; i < qa[key].A.length; i++) {
      $("#questions").append('<input type="radio" value="'+ qa[key].A[i] +'" name="options' + key + ' ">' + qa[key].A[i] + '</input><br></br>');

      }

    
    $("input[type='radio']").click(function() {
      console.log(key)
        var correct = $("input[name='options" + key + "']:checked").val();
    console.log(correct);
    })
  }
};

appendQA();


//     // countdown function
//     var startTime = 12;
//     var interval;
//     function countdown() {
      
//       interval = setInterval(decrement, 1000)

//     }

//     function decrement() {
//       startTime--;
//       renderTime();
//       $("#show-number").html("<h2>" + startTime + "</h2>");
//       if (startTime === 0) {
//        clearInterval(interval)
//         alert("Times up")
//       }
//     }

//     function renderTime() {
      

//     }

//     function start() {
      
//       renderTime();
//       countdown();
//     }
  
//   $("#start").on("click", start);
   
//     function start() {

//   $("#button").on("click")
  
// }

// countdown();
// start();




