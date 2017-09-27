var timer = 120


var gameOper = {

    qA : {Q1 : "nvjbhj", a1 : "klajsd", a2 : "asdf", a3: "sdfg", a4 : "werg"  },
          {Q2 : "asdf", a1 : "klajsd", a2 : "asdf", a3 : "sdfg", a4 : "werg"  },
          {Q3 : "asdf", a1 : "klajsd", a2 : "asdf", a3 : "sdfg", a4 : "werg"  },
          {Q4 : "asdf", a1 : "klajsd", a2 : "asdf", a3 : "sdfg", a4 : "werg"  },
          {Q5 : "asdf", a1 : "klajsd", a2 : "asdf", a3 : "sdfg", a4 : "werg"  }
    

};


function start() {

  $("#button").on("click")


};

function countdown() {
  var interval = setIntravel(decrament, 1000);
};

function decrament() {
  number--;
  if(number === 0) {
    end();

  }
};


function end() {
  // show # of correct/wrong (or not) answered

  // say game over
  $("#gameover").html("Game over!!!")
}





// where in the world is carman san diego?
// why did the chicken cross the road?
// 