document.addEventListener('DOMContentLoaded', () => {
  // Display Choice Elements
  var displayCompChoice = document.getElementById('computerChoice');
  var displayUsrChoice = document.getElementById('userChoice');

  // Display Score Elements
  var tieScore = document.getElementById('tie_score')
  var showUserScore = document.getElementById('user_score');
  var showComputerScore = document.getElementById('computer_score');

  // User interactive elements
  var rockBtn = document.getElementById('rock');
  var paperBtn = document.getElementById('paper');
  var scissorsBtn = document.getElementById('scissors');

  // Keep track of score
  var userScore = 0;
  var computerScore = 0;
  var tie = 0;

  function getComputerChoice() {
    var choice = Math.floor(Math.random() * 3);
    
    return choice;
  }

  function compare(usrChoice) {
    compChoice = getComputerChoice();
    if (compChoice == 1) {
      compChoice = 'Rock'
    } else if (compChoice == 2) {
      compChoice = 'Paper'
    } else {
      compChoice = 'Scissors'
    }

    displayCompChoice.innerHTML = compChoice;

    // if they are the same, tie
    if (usrChoice === compChoice) {
      tie = tie + 1
      console.log("Tie: " + tie)
      tieScore.innerHTML = tie
    }
    // if user chose rock, they win IF computer chose scissors
    //    otherwise the computer wins
    if (usrChoice == 'Rock') {
      if (compChoice == 'Scissors') {
        computerScore += 1;
      } else {
        userScore += 1;
      }
    }

    // if user chose paper, they win IF computer chose rock
    //    otherwise the computer wins
    if (usrChoice == 'Paper') {
      if (compChoice == 'Rock') {
        computerScore += 1;
      } else {
        userScore += 1;
      }
    }

    // if user chose scissors, they win IF the computer chose paper
    //    otherwise the computer wins
    if (usrChoice == 'Scissors') {
      if (compChoice == 'Paper') {
        computerScore += 1;
      } else {
        userScore += 1;
      }
    }

    // Display the results
    showUserScore.innerHTML = userScore;
    showComputerScore.innerHTML = computerScore;

  }

  rockBtn.addEventListener('click', () => {
    displayUsrChoice.innerHTML = 'Rock'
    compare('Rock')
  });

  paperBtn.addEventListener('click', () => {
    displayUsrChoice.innerHTML = 'Paper'
    compare('Paper')
  });

  scissorsBtn.addEventListener('click', () => {
    displayUsrChoice.innerHTML = 'Scissors'
    compare('Scissors')
  });
});