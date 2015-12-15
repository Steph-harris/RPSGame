window.roPaSc = {
  gameState: {
    usrScr : 0,
    compScr : 0,
    rndCnt : 1
  }
}

$(document).ready(function(){
  var rps = ["Rock", "Paper", "Scissors"];
  // make the success btns off on window load
  $(".leaderboard").hide();
  $("#screen").slideUp(500);
  $(".btn-success").attr('disabled',true);
  $("#inputModal").modal("show");
  
  $('#inputModal').on('hidden.bs.modal', function (e) {
    $("#titleScreen").fadeIn(700).delay(5000).slideUp(600);
    $("#screen").delay(6300).slideDown(1000);
  });

  $('#myModal').on('hidden.bs.modal', function (e) {
    $("#screen").slideDown(700);
    $("input").focus();
  });

  $(".btn-block").on("click",function(){
    if($(this).attr("data-state")==="off"){
      $(this)
      .attr("data-state", "on")
      .removeClass("btn-warning")
      .addClass("btn-danger")
      .text("Stop Game")
    $(".btn-success").attr('disabled',false);
    } else {
      $(this)
      .attr("data-state", "off")
      .removeClass("btn-danger")
      .addClass("btn-warning")
      .text("Start Game");
    $(".btn-success").attr('disabled',true);
    }
  });

  $(".btn-success").hover(function(){
      $(this).addClass("tossing");
    }, function(){
      $(this).removeClass("tossing");
  });

  $(".btn-success").on("click", function(e){
    e.preventDefault()
    var usrChoice = $(this).attr("id");      
    var computerChoice = compRPS();
    var rndNmb = parseInt($("#roundNmbr").val());

    function tieGame(){
    $("#myModalLabel").text("Tie Game!")
    $(".status").text("You both picked: " + computerChoice + "|" + usrChoice + "; tie game means no points! Play Again!")
    roPaSc.gameState.rndCnt--;
    }

    function iWin(){
    $("#myModalLabel").text("You may have won this round...")
    $(".status").text("You picked " + usrChoice + " and the comp chose " + computerChoice +". 1 point for you!");
    roPaSc.gameState.usrScr++;
    $("#userScore").text("Your Score is: " + roPaSc.gameState.usrScr)
    }

    function youWin(){
    $("#myModalLabel").text("Rise of the Machines...You Lose")
    $(".status").text("You picked " + usrChoice + " and the comp chose " + computerChoice +". 1 point for the Computer!");
    roPaSc.gameState.compScr++;
    $("#compScore").text("Computer Score is: " + roPaSc.gameState.compScr)
    }

    $("#screen").slideUp(500);
    //need the rndCnt to be the triggering event instead of button click
    if(roPaSc.gameState.rndCnt<rndNmb){     
      if(usrChoice===computerChoice){
        tieGame();
      } else if(usrChoice==="Rock" && computerChoice==="Scissors" || usrChoice==="Paper" && computerChoice==="Rock" || usrChoice==="Scissors" && computerChoice==="Paper"){
        iWin();
      }else if(usrChoice==="Rock" && computerChoice==="Paper" || usrChoice==="Paper" && computerChoice==="Scissors" || usrChoice==="Scissors" && computerChoice==="Rock"){
        youWin();
      }     
    }
    else if (roPaSc.gameState.rndCnt=rndNmb){    
      //added return to keep game from ending on a tie in round 5
      if(usrChoice===computerChoice){
        tieGame();
        $("#myModal").modal("show");
        return;
      } else if(usrChoice==="Rock" && computerChoice==="Scissors" || usrChoice==="Paper" && computerChoice==="Rock" || usrChoice==="Scissors" && computerChoice==="Paper"){
        iWin();
        $("#userScore").text("Your Score is: " + roPaSc.gameState.usrScr)
      }else if(usrChoice==="Rock" && computerChoice==="Paper" || usrChoice==="Paper" && computerChoice==="Scissors" || usrChoice==="Scissors" && computerChoice==="Rock"){
        youWin();
      }     
      
      $("#round").hide();
      $(".compInfo").hide();
      $(".btn-block").hide();
      $(".btn-success").fadeOut(2500);
      $(".leaderboard").fadeIn(2500);
      if (roPaSc.gameState.usrScr < roPaSc.gameState.compScr){       
        $("#myModalLabel").text("Game Over")
        $(".status").text("You lost " + roPaSc.gameState.usrScr + " to " + roPaSc.gameState.compScr);
        $(".winner").text("You Lose...");
      } else {       
        $("#myModalLabel").text("You Did It!")
        $(".status").text("You won " + roPaSc.gameState.usrScr + " to " + roPaSc.gameState.compScr);
        $(".winner").text("YOU WIN!!!");
      }    
    }
    $("#myModal").modal("show");
  });
  
  $(".modal-footer").on("click",".reset", function(){
    roPaSc.gameState.usrScr= 0;
    roPaSc.gameState.compScr= 0;
    roPaSc.gameState.rndCnt= 1;
    $("#round").text("Round " + roPaSc.gameState.rndCnt)
    $("#userScore").text("Your Score is " + roPaSc.gameState.usrScr)
    $("#compScore").text("Computer Score is " + roPaSc.gameState.compScr)
    $("#round").show();
    $(".btn-success").fadeIn(2500);
    $(".leaderboard").hide();
    $(".winner").hide();
    $(".compInfo").show();
    $(".btn-block").show();
  });

  function compRPS(){
    var compChoice = Math.floor(Math.random() * rps.length);
    $("h2").text(rps[compChoice])

    return (rps[compChoice])
  }
});
