

var number = 120
    
    var QA = {


      Q1 : { 
          Q : "Where in the world is Carmen San Diego?",
          A : ["nvjbhj", a1 : "klajsd", a2 : "asdf", a3: "sdfg", a4 : "werg"]
           
           },

      Q2 : {
              Q : "why did the chicken cross the road?",
              A : ["asdf", a1 : "klajsd", a2 : "asdf", a3 : "sdfg", a4 : "werg"]

             },   

      Q3 : { 
               Q : "asdfasd",
               A :  ["asdf", a1 : "klajsd", a2 : "asdf", a3 : "sdfg", a4 : "werg"]
             
            },

      Q4 : { 
              Q : "asdf",
              A : ["asdf", a1 : "klajsd", a2 : "asdf", a3 : "sdfg", a4 : "werg"]
            
            },

      Q5 : {    
              Q : "lkj"
              A : ["asdf", a1 : "klajsd", a2 : "asdf", a3 : "sdfg", a4 : "werg"] 
        
        } 
    };

function start() {

  $("#button").on("click")
  

};

function countdown() {
  var interval = setIntravel(decrament, 1000);
};

function decrament() {
  number--;
  $("#show-number").html("<h2>" + number + "</h2>");
  if(number === 0) {
  
    end();

  }
};


function end() {
  // show # of correct/wrong (or not) answered

  // say game over
  $("#gameover").html("Game over!!!")
}

// still need to work on the render function.... 
function renderQA() {
  for(var i = 0; i <= 5; i++) {
    $(":radio").append("<div>")
  }
}

countdown();



// where in the world is carman san diego? A: Normandy, Taipei, Kulam
// why did the chicken cross the road?
// 