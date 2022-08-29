// write your code here
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
    console.log("FizzBuzz");
    continue;
  }
  if (checkThree(i)) console.log("Fizz");
  else if (checkFive(i)) console.log("Buzz");
  else console.log(i);
}
