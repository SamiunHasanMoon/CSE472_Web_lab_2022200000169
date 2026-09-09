// ---------------------------------------------------
// Lab 03: JavaScript Foundations and Simple Interaction
// Bus Ticket Booking System
// ---------------------------------------------------

// Variable storing the total number of seats
let totalSeats = 12;

// Variable storing the number of occupied seats
let occupiedSeats = 2;

// Variable storing the selected seat
let selectedSeat = null;


// Interaction 1: Check seat availability
// Uses a variable and an if...else condition
function checkSeatAvailability() {
  let message = document.getElementById("seatMessage");

  let availableSeats = totalSeats - occupiedSeats;

  if (availableSeats > 0) {
    message.textContent =
      "Seats are available. Remaining seats: " + availableSeats;
  } else {
    message.textContent = "Sorry, no seats are available.";
  }
}


// Interaction 2: Select a seat
// Reads the seat number entered by the user
function selectSeat() {
  let seatNumber = document.getElementById("seatNumber").value;
  let output = document.getElementById("selectedSeatMessage");

  if (seatNumber === "") {
    output.textContent = "Please enter a seat number first.";
  } 
  else if (seatNumber < 1 || seatNumber > totalSeats) {
    output.textContent = "Please enter a valid seat number between 1 and 12.";
  } 
  else {
    selectedSeat = seatNumber;
    output.textContent = "You selected Seat #" + seatNumber;
  }
}


// Interaction 3: Show passenger greeting
// Reads the passenger name from the input field
function showGreeting() {
  let name = document.getElementById("passengerName").value;
  let output = document.getElementById("greetingMessage");

  if (name === "") {
    output.textContent = "Please enter your name first.";
  } 
  else {
    output.textContent = "Welcome, " + name + "!";
  }
}


// Independent improvement: Show route reminder
function showRouteReminder() {
  let message = document.getElementById("routeMessage");

  message.textContent =
    "Reminder: Please arrive at the bus counter 15 minutes before departure.";
}