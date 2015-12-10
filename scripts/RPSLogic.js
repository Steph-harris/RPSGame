$(document).ready(function(){
  
  $("button").on("click", function(){
    debugger
    roPaSc.gameState.rndCnt++;
    $("#round").text("Round " + roPaSc.gameState.rndCnt)
  });
});