window.rps = {
  gameState: {
    usrScr : 0,
    compScr : 0,
    rndCnt : 1
  }
}

$(document).ready(function(){
  var rps = ["rock", "paper", "scissors"];
  var usrChoice = $(".btn-success").text();
  //var compChoice = Math.floor(Math.random() * rps.length);

  $("#rock").on("click", function(e){
    e.preventDefault()
    alert("You picked rock and the comp chose: " + compRPS());
  })
  $("#paper").on("click", function(e){
    e.preventDefault()
    alert("You picked paper and the comp chose: " + compRPS());
  })
  $("#scissors").on("click", function(e){
    e.preventDefault()
    alert("You picked scissors and the comp chose: " + compRPS());
  })

  $("#rand").on("click",function(){
    compRPS();
  })

  function compRPS(){
    var compChoice = Math.floor(Math.random() * rps.length);
    $("h2").text(rps[compChoice])

    return (rps[compChoice])
  }
});

//user chooses r,p, or s, so make conditionals for each button?