//Utility Logic
function returnInput(number) {
  return parseInt(number);
}

function isNumber3(number) {
  if (parseInt(number) === 3) {
    return true;
  } else {
    return false;
  }
}

function isNumber2(number) {
  if (parseInt(number) === 2) {
    return true;
  } else {
    return false;
  }
}

function isNumber1(number) {
  if (parseInt(number) === 1) {
    return true;
  } else {
    return false;
  }
}


//Business Logic 

function countUpTo(number) {
  let totalArray = [];
  for (let currentNumber = 0; currentNumber <= number; currentNumber += 1) {
    totalArray.push(parseInt(currentNumber))
  }
  const joinedTotalArray = totalArray.join(" ");
  return joinedTotalArray;
}

function mrRogersEquation(number) {
  const rogersNumber = "Won't you be my neighbor?";
  const boop = "Boop!";
  const beep = "Beep!";
  if (isNumber3(number)) {
    return rogersNumber;
  } else if (isNumber2(number)) {
    return boop;
  } else 
  if (isNumber1(number)) {
    return beep;
  } else {
    return number;
  }
}

//UI Logic

window.addEventListener("load", function() {
  const form = document.getElementById("number-input");
  form.addEventListener("submit", mrRogersEquation)
})