console.log('js file is connected');
console.log(2 + 2);

function checkout (item1, item2, coupon, tax) {
  var subtotal = item1 + item2;
  var couponValue = subtotal * coupon;
  var grandTotal = subtotal - couponValue;
  var finalTotal = grandTotal * tax;
  //console.log(grandTotal);
  return finalTotal;
}

console.log(checkout(33, 19, .15, 1.0725));

// var test = $(".fantasy-paragraph");
// test.text("CSSI");


function myGreeting() {
  console.log('button was clicked');
  var userName = $('#username').val();
  console.log(userName);
  var userAge = $('#userage').val();
  console.log(userAge);
  $('#blue-heading').text('Welcome, ' + userName);
}

function setup() {
  console.log('page is ready');
  $('#submitButton').click(myGreeting)
}

$(document).ready(setup)




var elevatorLine = [];
//for (var eleNum = 0; eleNum < elevatorLine; eleNum++)
function pressFloorNumber(elevatorLine) {
  if (elevatorLine === 7){
    console.log("Position 7")
  } else if (elevatorLine === 2) {
    console.log("Position 2")
  } else if (elevatorLine === 3) {
    console.log("Postion 3")
  } else if (elevatorLine === 6) {
    console.log("Postion 6")
  } else {
    console.log("The line is currently empty")
  }
}
function goToNextFloor() {
  if (elevatorLine === 0) {
    elevatorLine.splice(i, 1)
    console.log("Floor 7")
  } else if (elevatorLine === 7) {
    elevatorLine.splice(i, 1)
    console.log("Floor 2")
  } else if (elevatorLine === 2) {
    elevatorLine.splice(i, 1)
    console.log("Floor 3")
  } else if (elevatorLine === 3) {
    elevatorLine.splice(i, 1)
    console.log("Floor 6")
  } else {
    console.log("There are no more floors to go!")
  }
}
