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

getUserName();
showFligthsPretty();
averageCostFligths();
scaleFlights();
lastFiveDestinations();
questionTypeOfUser();

function getUserName() {
  const userName = prompt("Introduce your name:");
  if (userName === "" || userName === null) {
    alert("Hello Guest and welcome to ISDI Airlines!");
  } else {
    alert("Hello " + userName + " and welcome to ISDI Airlines!");
  }
}

function showFligthsPretty() {
  for (let i = 0; i < flights.length; i++) {
    let prettyFlights =
      "ID: " +
      flights[i].id +
      " from: " +
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

function questionTypeOfUser() {
  let typeOfUser = prompt("Are you Admin or User? ADMIN/USER");
  if (typeOfUser.toUpperCase() === "ADMIN") {
    adminAirlines();
  } else if (typeOfUser.toUpperCase() === "USER") {
    userAirlines();
  } else {
    alert("Incorrect answer!");
    questionTypeOfUser();
  }
}

function adminAirlines() {
  let adminOptions = prompt(
    "Do you want to create a new flight or to erase an existing one? CREATE/ERASE"
  );
  if (adminOptions.toUpperCase() === "CREATE") {
    createNewFlight();
  } else if (adminOptions.toUpperCase() === "ERASE") {
    eraseFlight();
  } else {
    alert("Incorrect answer!");
    adminAirlines();
  }
}

function createNewFlight() {
  if (flights.length >= 15) {
    alert("Can't create a new flight, the memory is full");
  } else {
    alert("Enter the new flight data");
    let newFlight = {};
    newFlight.id = flights.length;
    let newFlightDestination = prompt("Flight destination:");
    if (newFlightDestination === "" || newFlightDestination === null) {
      alert("Incorrect data, start again");
      createNewFlight();
    } else {
      newFlight.to = newFlightDestination;
    }
    let newFlightOrigin = prompt("Flight origin:");
    if (newFlightOrigin === "" || newFlightOrigin === null) {
      alert("Incorrect data, start again");
      createNewFlight();
    } else {
      newFlight.from = newFlightOrigin;
    }
    let newFlightCost = prompt("Cost:");
    if (
      newFlightCost === NaN ||
      newFlightCost === "" ||
      newFlightCost === null
    ) {
      alert("Incorrect data, start again");
      createNewFlight();
    } else {
      newFlight.cost = newFlightCost;
    }
    newFlight.scale = confirm("Scale:");
    flights.push(newFlight);
    alert("You have created a new flight!");
    showFligthsPretty();
  }
}

function eraseFlight() {
  let flightToDelete = prompt("Enter the ID flight to delete:");
  if (flightToDelete !== NaN && flightToDelete <= flights.length) {
    flights.splice(flightToDelete, 1);
    alert("You deleted a flight!");
    showFligthsPretty();
  } else {
    eraseFlight();
  }
}

function userAirlines() {
  let userPrice = prompt(
    "Enter the maximum price of the flight you are looking for:"
  );
  if (userPrice !== NaN) {
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].cost <= userPrice) {
        let prettyFlights =
          "ID: " +
          flights[i].id +
          " from: " +
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
  } else {
    userAirlines();
  }
  userBuysFlight();
}
function userBuysFlight() {
  let userFlight = prompt("Enter the ID of the flight you want to buy");
  if (userFlight !== NaN && userFlight <= flights.length) {
    alert("Thank you for your purchase, come back soon!");
  } else {
    userBuysFlight();
  }
}
