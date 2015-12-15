$(document).ready(function(){
  //figure out how to make game stop after 5th round
  $(".btn-success").on("click", function(){
    var rndNmb = parseInt($("#roundNmbr").val());

    if(roPaSc.gameState.rndCnt <= rndNmb){
      roPaSc.gameState.rndCnt++;
      $("#round").text("Round " + roPaSc.gameState.rndCnt)
    }
  });

  $("#round").text("Round " + roPaSc.gameState.rndCnt)
  $("#userScore").text("Your Score is " + roPaSc.gameState.usrScr)
  $("#compScore").text("Computer Score is " + roPaSc.gameState.compScr)
});

//1. Add more home screen animations (moving h2's)
//2. Figure out how to refresh the game
//3. Find way to clear computer choice on game restart

