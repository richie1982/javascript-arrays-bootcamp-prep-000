var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, candy){
  return [candy, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candy){
  chocolateBars.unshift(candy)
  return chocolateBars
}

function 