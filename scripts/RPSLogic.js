$(document).ready(function(){
  
  $(".btn-success").on("click", function(){
    roPaSc.gameState.rndCnt++;
    $("#round").text("Round " + roPaSc.gameState.rndCnt)
  });

  $("#round").text("Round " + roPaSc.gameState.rndCnt)
  $("#userScore").text("Your Score is " + roPaSc.gameState.usrScr)
  $("#compScore").text("Computer Score is " + roPaSc.gameState.compScr)
});

