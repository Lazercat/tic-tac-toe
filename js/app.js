  /* KNOWN ISSUES
  ****************
   1) Reset function doesn't reload page, it clears the board with innerHTML
      It can't reset the turnNumber variable which is a problem for turn tracking
  *********************/

  // wait for the DOM to finish loading
  $(document).ready(function() {
    // all code to manipulate the DOM
    // goes inside this function

     /* #4 SCOREBOARD/STATS & WIN ANNOUNCEMENT
      ********************/
     function winYell(win){
      console.log(win + ' is the Winner of Round ' + round);
      round++;
      document.querySelector('.round').value=round;

      if (win === 'Player X' ){
        xwins++;
        document.querySelector('.x-wins').value = xwins;
        modal.style.display = "block";
        announce.innerHTML = "PLAYER X WINS!" + ecsi;
      } else if (win === 'Player O'){
        owins++;
        document.querySelector('.o-wins').value = owins;
        modal.style.display = "block";
        announce.innerHTML = "PLAYER O WINS!" + ohsi;
      } else if (win === 'Draw') {
        //Launch Modal to reset game
        modal.style.display = "block";
        announce.innerHTML = "Game is a Draw - try again!";
      }

      console.log('Now the round is ' + round);
      turnNumber = 0;
      resetGrid();
      return round;
     }

    /* #3 WINNER TRACKING
    ********************/
    function winTrack(winner){
        //VARS FOR WAYS X CAN WIN
          var rw1x = [...document.querySelectorAll('.row1 > img#x')]; //row1
          var rw2x = [...document.querySelectorAll('.row2 > img#x')]; //row2
          var rw3x = [...document.querySelectorAll('.row3 > img#x')]; //row3
          var cl1x = [...document.querySelectorAll('.col1 > img#x')]; //column 1
          var cl2x = [...document.querySelectorAll('.col2 > img#x')]; //column 2
          var cl3x = [...document.querySelectorAll('.col3 > img#x')]; //column 3
          var d1x  = [...document.querySelectorAll('.diag1 > img#x')]; //diagonal 1
          var d2x  = [...document.querySelectorAll('.diag2 > img#x')]; //diagonal 2

         //VARS FOR WHEN O WINS
          var rw1o = [...document.querySelectorAll('.row1 > img#o')]; //row 1
          var rw2o = [...document.querySelectorAll('.row2 > img#o')]; //row 2
          var rw3o = [...document.querySelectorAll('.row3 > img#o')]; //row 3
          var cl1o = [...document.querySelectorAll('.col1 > img#o')]; //column 1
          var cl2o = [...document.querySelectorAll('.col2 > img#o')]; //column 2
          var cl3o = [...document.querySelectorAll('.col3 > img#o')]; //column 3
          var d1o  = [...document.querySelectorAll('.diag1 > img#o')]; //diagonal 1
          var d2o  = [...document.querySelectorAll('.diag2 > img#o')]; //diagonal 2

          //ALL SQUARES NO WINNER
          var all = [...document.querySelectorAll('.col-xs-4 img')];



        //WIN SNIFFER
          if (rw1x.length===3||rw2x.length===3||rw3x.length===3||cl1x.length===3||cl2x.length===3||cl3x.length===3||d1x.length===3||d2x.length===3){
            winner = "Player X";
            winYell(winner);
          } else if (rw1o.length===3||rw2o.length===3||rw3o.length===3||cl1o.length===3||cl2o.length===3||cl3o.length===3||d1o.length===3||d2o.length===3){
            winner = "Player O";
            winYell(winner);
          } else if ( all.length===9){ //squares is always 9, its if it has an img in it
            winner = "Draw";
            winYell(winner);
          } //if all 9 boxes are filled. where is that array? thatarray.length===9 = draw
   }

    /*  #1 GLOBAL VARIABLES -- start here
    *********************/
     var ecsi = '<img id="x" src="img/x.gif" alt="x" height="100%">';  //X img
     var ohsi = '<img id="o" src="img/o.gif" alt="o" height="100%">'; //O img
     var squares = [...document.querySelectorAll('.col-xs-4')]; // array all squares
     var turnNumber = 0;  // turn tracking
     var playerUp = document.querySelector('.current-player'); //holds val of current player <--??
     var winner = null;
     var xwins = 0;
     var owins = 0;
     var round = 1;
     var modal = document.getElementById('myModal');  // Get the modal
     var announce = document.querySelector('.winAnnounce'); //get message in modal

    /* #2 USER CLICKS IN GRID - Page loads, user clicks a square
    ************************/
    squares.forEach(function(square) {
    square.addEventListener('click', function(event) {

    //SQUARE IS AVAILABLE TO PLAY?
    if(square.innerHTML!=ecsi && square.innerHTML!=ohsi){

    //WHO'S TURN IS IT TO PLAY?
     turnNumber = turnNumber+1;
      var turnRemain = turnNumber%2;
      console.log("turn number:" + turnNumber + " remain: " + turnRemain);

      //SET X OR O BASED ON TURN
       if(turnRemain===0){square.innerHTML=ecsi;playerUp.innerHTML='Player 1(O) Turn!';} //Put an x on it
       else if (turnRemain===1){square.innerHTML=ohsi;playerUp.innerHTML='Player 2(X) Turn!';} //put an o on it
        winTrack(winner);  //FIRE OFF WINNER TRACKER step 3
        return turnNumber;
    }

    //SQUARE IS NOT AVAILABLE TO PLAY. ALERT USER.
    else {alert("You cannot play here. Square is occupied. Try another square.");
    }

    })//CLOSE square event listener
   })//CLOSE function of square


/* #ANYTIME btn clicked or winner determined - RESET GRID
********************/
 function resetGrid(){
    var squares = [...document.querySelectorAll('.col-xs-4')];
    var x = document.querySelector('.current-player');
    x.innerHTML = 'Player 1(O) Turn!';
    let turnNumber=0;
     squares.forEach(function(squareReset){
      squareReset.innerHTML = " ";
      console.log("reset grid");
      return turnNumber;
   }) //close forEach
 } //close resetGrid




})//CLOSE DOM SNIFFING
