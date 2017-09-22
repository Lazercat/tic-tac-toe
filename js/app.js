  /* KNOWN ISSUES
  ****************
   1).   Reset function doesn't reload page, it clears the board with innerHTML
         It can't reset the turnNumber variable which is a problem.

   2).   Reset function brings the initial 'a' values back from god knows where. they've
         been removed from the initial index page.

   3)    Scoring functionality doesn't exist yet.

   4)    No way to inform that a character has won yet.
  *********************/

  // wait for the DOM to finish loading
  $(document).ready(function() {
    // all code to manipulate the DOM
    // goes inside this function

  /*  TARGET
    <div class="col-md-6 col-md-offset-3" id="board">
    <section id="r1" class="row">
      <div id="tl1" class="col-md-4 box row1 col1 diag1">row1 col1 diag1</div>
      <div id="tc2" class="col-md-4 box row1 col2"> row1 col2</div>
      <div id="tr3" class="col-md-4 box row1 col3 diag2">row1 col3 diag2</div>
    </section>
    <section id="r2" class="row">
      <div id="ml4" class="col-md-4 box row2 col1">row2 col1</div>
      <div id="mc5" class="col-md-4 box row2 col2 diag1 diag2">row2 col2 diag1 diag2</div>
      <div id="mr6" class="col-md-4 box row2 col3">row2 col3</div>
    </section>
    <section id="r3" class="row">
      <div id="bl7" class="col-md-4 box row3 col1 diag2">row3 col1 diag2</div>
      <div id="bc8" class="col-md-4 box row3 col2">row3 col2</div>
      <div id="br9" class="col-md-4 box row3 col3 diag1">row3 col3 diag1</div>
    </section>
   *******************************/



  /* ELEMENTS
  ********************/
   var ecsi = '<img src="img/x.gif" alt="x" height="100%">';
   var ohsi = '<img src="img/o.gif" alt="o" height="100%">';
   var winner;

  /* GLOBAL VARIABLES
  *********************/
    var squares = [...document.querySelectorAll('.col-md-4')]; //es6
    console.log(squares);
    var turnNumber=0;
    var playerUp = document.querySelector('.current-player');


  /* USER CLICKS IN GRID
  ************************/
    squares.forEach(function(square) {
    square.addEventListener('click', function(event) {

    //SQUARE IS AVAILABLE TO PLAY
    if(square.innerHTML!=ecsi && square.innerHTML!=ohsi){

    //WHO'S TURN IS IT TO PLAY?
     turnNumber = turnNumber+1;
      var turnRemain = turnNumber%2;
      console.log("turn number:" + turnNumber + " remain: " + turnRemain);

      //SET X OR O BASED ON TURN
       if(turnRemain===0){square.innerHTML=ecsi;playerUp.innerHTML='Player 1(O) Turn!';} //Put an x on it
       else if (turnRemain===1){square.innerHTML=ohsi;playerUp.innerHTML='Player 2(X) Turn!';} //put an o on it

      return turnNumber;
    }

    //SQUARE IS NOT AVAILABLE TO PLAY. ALERT USER.
    else {
      alert("You cannot play here. Square is occupied. Try another square.");
    }

    })//CLOSE square event listener
  }) //CLOSE function of square
  }); //CLOSE forEach Loop

/* RESET GRID
********************/
 function resetGrid(){
    var squares = [...document.querySelectorAll('.col-md-4')]; //es6
    var x = document.querySelector('.current-player');
    x.innerHTML = 'Player 1(O) Turn!';
    var turnNumber=0;
     squares.forEach(function(squareReset){
      squareReset.innerHTML = "a";
      console.log("reset grid");
   }) //close forEach
 } //close resetGrid



  /* WINNER TRACKER
  ********************/
  function winTrack(){

    //IS A ROW ALL ONE KIND?
    var row1 = [...document.getSelectorAll('.row1')];
    console.log(row1);


    //IS A COLUMN ALL ONE KIND?


    //IS THERE A DIAGONAL?


  }
  winTrack();









