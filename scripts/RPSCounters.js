window.roPaSc = {
  gameState: {
    usrScr : 0,
    compScr : 0,
    rndCnt : 1
  }
}

$(document).ready(function(){
  var rps = ["Rock", "Paper", "Scissors"];
  
  $(".btn-success").on("click", function(e){
    e.preventDefault()
    var usrChoice = $(this).attr("id");      
    var computerChoice = compRPS();

    if(roPaSc.gameState.rndCnt<=5){
      console.log(usrChoice, computerChoice);
      if(usrChoice===computerChoice){
        $("#myModalLabel").text("Tie Game!")
        $(".modal-body").text("You both picked: " + computerChoice + "|" + usrChoice + "; tie game means no points! Play Again!")
        roPaSc.gameState.rndCnt--;
      } else if(usrChoice==="Rock" && computerChoice==="Scissors" || usrChoice==="Paper" && computerChoice==="Rock" || usrChoice==="Scissors" && computerChoice==="Paper"){
        $("#myModalLabel").text("You may have won this round...")
        $(".modal-body").text("You picked " + usrChoice + " and the comp chose " + computerChoice +". 1 point for you!");
        roPaSc.gameState.usrScr++;
        $("#userScore").text("Your Score is: " + roPaSc.gameState.usrScr)
      }else if(usrChoice==="Rock" && computerChoice==="Paper" || usrChoice==="Paper" && computerChoice==="Scissors" || usrChoice==="Scissors" && computerChoice==="Rock"){
        $("#myModalLabel").text("Rise of the Machines...You Lose")
        $(".modal-body").text("You picked " + usrChoice + " and the comp chose " + computerChoice +". 1 point for the Computer!");
        roPaSc.gameState.compScr++;
        $("#compScore").text("Computer Score is: " + roPaSc.gameState.compScr)
      }
      $("#myModal").modal("show");
    }
    else{
      alert("game over")
    }
  })

  function compRPS(){
    var compChoice = Math.floor(Math.random() * rps.length);
    //debugger
    $("h2").text(rps[compChoice])

    return (rps[compChoice])
  }
});
