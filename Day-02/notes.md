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

