let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function getUserName() {
  userName = prompt("Introduce your name:");
  if (userName === "" || userName === null) {
    alert("Hello Guest and welcome to ISDI Airlines!");
  } else {
    alert("Hello " + userName + " and welcome to ISDI Airlines!");
  }
}

function showFligthsToUser() {
  for (let i = 0; i < flights.length; i++) {
    let prettyFlights =
      "Flight from: " +
      flights[i].from +
      ", to: " +
      flights[i].to +
      " costs " +
      flights[i].cost +
      "€";
    if (flights[i].scale) {
      alert(prettyFlights + " and does scale");
    } else {
      alert(prettyFlights + " and does not scale");
    }
  }
}

function averageCostFligths() {
  let averageCost = 0;
  for (let i = 0; i < flights.length; i++) {
    averageCost += flights[i].cost;
  }
  alert(
    "The average cost of the fligths is " +
      Math.round(((averageCost / flights.length) * 100) / 100) +
      "€"
  );
}

function scaleFlights() {
  let numberOfScaleFlights = 0;
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale) {
      numberOfScaleFlights++;
    }
  }
  alert("There are " + numberOfScaleFlights + " scale flights");
}

function lastFiveDestinations() {
  alert("The destination of the last five flights of the day are:");
  for (let i = 6; i < flights.length; i++) {
    alert(flights[i].to);
  }
}

getUserName();
showFligthsToUser();
averageCostFligths();
scaleFlights();
lastFiveDestinations();
