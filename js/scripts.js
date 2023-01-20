//Utility Logic
function returnInput(number) {
  return parseInt(number);
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

