$(document).ready(function(){

  

  //figure out how to make game stop after 5th round
  $(".btn-success").on("click", function(){
    if(roPaSc.gameState.rndCnt <= 5){
      roPaSc.gameState.rndCnt++;
      $("#round").text("Round " + roPaSc.gameState.rndCnt)
    }
  });

  $("#round").text("Round " + roPaSc.gameState.rndCnt)
  $("#userScore").text("Your Score is " + roPaSc.gameState.usrScr)
  $("#compScore").text("Computer Score is " + roPaSc.gameState.compScr)
});

//1. Add home screen with main Rock, Paper, Scissors animation
//2. Figure out how to refresh the game
//3. Log name and score to Firebase