// write your code here
let result = [];

function checkThree(num) {
  if (num % 3 === 0) {
    return true;
  } else return false;
}

function checkFive(num) {
  if (num % 5 === 0) {
    return true;
  } else return false;
}

for (let i = 1; i <= 100; i++) {
  if (checkFive(i) && checkThree(i)) {
    result.push("FizzBuzz");
    continue;
  }
  if (checkThree(i)) result.push("Fizz");
  else if (checkFive(i)) result.push("Buzz");
  else result.push(i);
}

document.querySelector("#result").innerHTML = result;
