window.roPaSc = {
  gameState: {
    usrScr : 0,
    compScr : 0,
    rndCnt : 1
  }
}

$(document).ready(function(){
  var rps = ["rock", "paper", "scissors"];
  var usrChoice = $(".btn-success").text();
  
  $(".btn-success").on("click", function(e){
    e.preventDefault()
    alert("You picked " + $(this).attr("id") + " and the comp chose: " + compRPS());
  })

  $("#rand").on("click",function(){
    compRPS();
  })

  $("#round").text("Round " + roPaSc.gameState.rndCnt)
  $("#userScore").text("Your Score is " + roPaSc.gameState.usrScr)
  $("#compScore").text("Computer Score is " + roPaSc.gameState.compScr)

  function compRPS(){
    var compChoice = Math.floor(Math.random() * rps.length);
    $("h2").text(rps[compChoice])

    return (rps[compChoice])
  }
});

//user chooses r,p, or s, so make conditionals for each button?