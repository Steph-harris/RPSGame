$(document).ready(function(){
  
  $(".btn-success").on("click", function(){
    roPaSc.gameState.rndCnt++;
    $("#round").text("Round " + roPaSc.gameState.rndCnt)
  });


});