# Day 02

- What I built: TODO APP (index.html added.)
- DSA problem solved: Find Median from Data Stream
- What I learned (3 bullets):
  * API Gateway Design

<!-- Factorializer

Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

    The factorial of zero is 1. 
-->

function factorial(n) {

  if(n === 0) {
    return 1;
  }
  let result = 1;
  for(let i = 1; i <= n; i++){
    result *= i;
  }
  return result;
}

<!-- Targeted Sum

Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

    The returned array should have the indices in ascending order. -->

function findTarget(arr, target) {
    const numMap = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (numMap.hasOwnProperty(complement) && numMap[complement] !== i) {
            return [numMap[complement], i].sort((a, b) => a - b);
        }
        numMap[arr[i]] = i;
    }
    return "Target not found";
}


<!-- Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input -- Output):

39 -> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 -> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 -> 0 (because 4 is already a one-digit number, there is no multiplication) function persistence(num) {
   //code me
} -->

function persistence(num) {
  if (num < 10) return 0;
  let count = 0;
  let current = num;
  while(current >= 10) {
    let digits = current.toString().split('');
    current = digits.reduce((acc, digit) => acc * parseInt(digit), 1);
    count++;
  }
  return count;
  
    
}

<!-- Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  // your code
}
 -->


function longest(s1, s2) {
    const combined = s1 + s2;
    const distinct = [...new Set(combined)];
    distinct.sort();
    return distinct.join('');
}

<!-- Description:

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) -> output

('+', 4, 7) -> 11
('-', 15, 18) -> -3
('*', 5, 5) -> 25
('/', 49, 7) -> 7 -->





function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
