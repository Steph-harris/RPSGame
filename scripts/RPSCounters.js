window.roPaSc = {
  gameState: {
    usrScr : 0,
    compScr : 0,
    rndCnt : 1
  }
}

$(document).ready(function(){
  var rps = ["rock", "paper", "scissors"];
  
  //var usrChoice = $(".btn-success").attr("data-tag");
  
  $(".btn-success").on("click", function(e){
    e.preventDefault()
    var usrChoice = $(this).attr("id");      
    var computerChoice = compRPS();
    
    console.log(usrChoice, computerChoice);
    if(usrChoice===computerChoice){
      alert("tie!")
    } else{
    alert("You picked " + usrChoice + " and the comp chose: " + computerChoice);
    }
  })

  $("#rand").on("click",function(){
    compRPS();
  })

  $("#round").text("Round " + roPaSc.gameState.rndCnt)
  $("#userScore").text("Your Score is " + roPaSc.gameState.usrScr)
  $("#compScore").text("Computer Score is " + roPaSc.gameState.compScr)

  function compRPS(){
    var compChoice = Math.floor(Math.random() * rps.length);
    //debugger
    $("h2").text(rps[compChoice])

    return (rps[compChoice])
  }
  
});

//user chooses r,p, or s, so make conditionals for each button?