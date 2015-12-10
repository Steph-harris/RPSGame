$(document).ready(function(){
  
  $("button").on("click", function(){
    
    roPaSc.gameState.rndCnt++;
    $("#round").text("Round " + roPaSc.gameState.rndCnt)
  });

  
});