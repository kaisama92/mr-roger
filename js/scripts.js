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


//UI Logic

