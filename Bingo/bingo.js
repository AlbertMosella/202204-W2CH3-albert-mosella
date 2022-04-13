let userName;
let card = [];
let balls = [];
let hitLine = false;

getUserName();
setUpGame();

function setUpGame() {
  card = [];
  balls = [];
  hitLine = false;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      card.push({ number: 0, matched: false });
    }
  }
  showSystemPoints();
  showRanking();
  do {
    generateCard();
  } while (!acceptCard());
  newTurn();
}

function getUserName() {
  userName = prompt("Introduce your name:");
  if (userName === "" || userName === null || userName === undefined) {
    alert("Hello Guest and welcome to Bingo!");
  } else {
    alert("Hello " + userName + " and welcome to Bingo!");
  }
}

function generateCard() {
  let randomNumber = generateRandomNumber();
  for (let i = 0; i < card.length; i++) {
    do {
      randomNumber = generateRandomNumber();
    } while (checkRepeatedCardNumbers(randomNumber));
    card[i].number = randomNumber;
  }
  printCardPretty();
}

function printCardPretty() {
  let prettyCard = new Array(3);
  prettyCard[0] = new Array(5);
  prettyCard[1] = new Array(5);
  prettyCard[2] = new Array(5);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      if (card[i * 5 + j].matched === true) {
        prettyCard[i][j] = "X";
      } else {
        prettyCard[i][j] = card[i * 5 + j].number;
      }
    }
  }
  console.table(prettyCard);
}

function generateRandomNumber() {
  return Math.floor(Math.random() * (91 - 1)) + 1;
}

function checkRepeatedCardNumbers(number) {
  for (let i = 0; i < card.length; i++) {
    if (number === card[i].number) {
      return true;
    }
  }
  return false;
}

function acceptCard() {
  let startBingo = prompt("Do you want this card? Yes/No");
  if (startBingo === null || startBingo === "") {
    alert("Incorrect answer!");
    return acceptCard();
  }
  if (startBingo.toUpperCase() === "YES") {
    return true;
  }
  if (startBingo.toUpperCase() === "NO") {
    return false;
  }
}

function newBallReleased() {
  let newBall;
  do {
    newBall = generateRandomNumber();
  } while (balls.includes(newBall));
  alert(
    "A new number has been released from the bingo ball cage: " + newBall + "!"
  );
  balls.push(newBall);
  return newBall;
}

function keepPlaying() {
  if (confirm("Keep playing?")) {
    return true;
  }
  return false;
}

function newTurn() {
  do {
    if (keepPlaying() && !bingoHit()) {
      let ball = newBallReleased();
      for (let i = 0; i < card.length; i++) {
        if (ball === card[i].number) {
          card[i].matched = true;
          if (!hitLine && lineHit()) {
            alert("You hit a number: " + ball + "! And you hit a line!");
            hitLine = true;
          } else {
            alert("You hit a number: " + ball + "!");
          }
          printCardPretty();
        }
      }
    } else {
      alert("The game is over");
    }
  } while (!bingoHit());
  alert(
    "You hit bingo! And you play it in " +
      balls.length +
      " turns! You got " +
      calculatePoints(balls.length) +
      "points!"
  );
  if (confirm("Do you want to play one more time?")) {
    setUpGame();
  } else {
    alert("The game is over");
  }
}

function lineHit() {
  if (
    (card[0].matched &&
      card[1].matched &&
      card[2].matched &&
      card[3].matched &&
      card[4].matched) ||
    (card[5].matched &&
      card[6].matched &&
      card[7].matched &&
      card[8].matched &&
      card[9].matched) ||
    (card[10].matched &&
      card[11].matched &&
      card[12].matched &&
      card[13].matched &&
      card[14].matched)
  ) {
    return true;
  }
  return false;
}

function bingoHit() {
  for (let i = 0; i < card.length; i++) {
    if (!card[i].matched) return false;
  }
  return true;
}

function showSystemPoints() {
  const pointsSystem = [
    { turns: "Less or equal to 15 turns", points: 1000 },
    { turns: "Less or equal to 30 turns", points: 800 },
    { turns: "Less or equal to 45 turns", points: 600 },
    { turns: "Less or equal to 60 turns", points: 400 },
    { turns: "Less or equal to 75 turns", points: 200 },
    { turns: "Less or equal to 90 turns", points: 100 },
  ];
  console.table(pointsSystem);
}
function calculatePoints(turns) {
  let points;
  if (turns <= 15) {
    points = 1000;
  } else if (turns <= 30) {
    points = 800;
  } else if (turns <= 45) {
    points = 600;
  } else if (turns <= 60) {
    points = 400;
  } else if (turns <= 75) {
    points = 200;
  } else if (turns <= 90) {
    points = 100;
  }
  return points;
}

function showRanking() {
  let ranking = [
    { name: "Freddy Mercuri", points: 1000 },
    { name: "Roger Waters", points: 800 },
    { name: "Don McLean", points: 800 },
    { name: "Cat Stevens", points: 600 },
    { name: "Roberta Flack", points: 600 },
    { name: "Billie Holiday", points: 200 },
  ];
  console.table(ranking);
}
