//Utility Logic
function returnInput(number) {
  return parseInt(number);
}

function isNegative(number) {
  if (number < 0) {
    return true; 
  } else {
  return false;
  };
}

function isSingleDigit(number) {
  if (number < 10 && number >= 0) {
    return true;
  } else {
    return false;
  }
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

function createNumberArray(input) {
  const numberArray = input.toString().split("");
  return numberArray;
}


//Business Logic 

function countUpTo(number) {
  let totalArray = [];
  for (let currentNumber = 0; currentNumber <= number; currentNumber += 1) {
    totalArray.push(parseInt(currentNumber))
  }
  return totalArray;
}

function mrRogersEquation(number) {
  const rogersNumber = "Won't you be my neighbor?";
  const boop = "Boop!";
  const beep = "Beep!";
  if (isNumber3(number)) {
    return rogersNumber;
  } else 
  if (isNumber2(number)) {
    return boop;
  } else
  if (isNumber1(number)) {
    return beep;
  } else {
    return number;
  }
}

function theNeighborhood(integer) {
  if (isNegative(integer)) {
    return "Please Enter a Number Greater Than 0."
  } else {
    const numberArray = countUpTo(integer)
    const finalNumberArray = [];
    numberArray.forEach(function (number) {
      if (isSingleDigit(number)) {
        finalNumberArray.push(mrRogersEquation(number));
      } else{
        let bigNumberArray = createNumberArray(number)
        if (bigNumberArray.includes("3")) {
          finalNumberArray.push(mrRogersEquation("3"));
        } else 
        if (bigNumberArray.includes("2")) {
          finalNumberArray.push(mrRogersEquation("2"));
        } else if (bigNumberArray.includes("1")) {
          finalNumberArray.push(mrRogersEquation("1"));
        } else {
          finalNumberArray.push(number);
        }
        }
      });
      return finalNumberArray;
    };
  }


//UI Logic

function handleTheNeighborhood(event) {
  event.preventDefault();
  let input = parseInt(document.getElementById("numberInput").value);
  let output = theNeighborhood(input);
  output = output.join(", ");
  document.getElementById("output").innerText = output;
}

window.addEventListener("load", function() {
  const form = document.getElementById("number-input");
  form.addEventListener("submit", handleTheNeighborhood)
})