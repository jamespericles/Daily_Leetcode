/* 
    Prompt: 

    Write a program that outputs the string representation of numbers from 1 to n.

    But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. 
    For numbers which are multiples of both three and five output “FizzBuzz”.

    n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]

    https://leetcode.com/problems/fizz-buzz/

    Time complexity will be O(n) given that the function will loop so long as i < n, and return once per item.
    Space complexity should be 0(n), need to create one variable
*/

let n = 15;

// messing around with the idea of a switch statement evaluating two expressions, can't seem to get it to work

// let fizzBuzz = (n) => {
//   let seq = [];
//   for (let i = 1; i <= n; i++) {
//     switch ((i % 3) + (i % 5)) {
//       case true + false:
//         seq.push("Fizz");

//       case false + true:
//         seq.push("Buzz");

//       case true + true:
//         seq.push("FizzBuzz");

//       default:
//         seq.push(i.toString());
//     }
//   }
//   return seq;
// };

// Faster than 44.92%, and less memory than 50.14%, 0(N) for both space and time

let fizzBuzz = (n) => {
  let seq = [];
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 !== 0) {
      seq.push("Fizz");
    } else if (i % 5 == 0 && i % 3 !== 0) {
      seq.push("Buzz");
    } else if (i % 3 == 0 && i % 5 == 0) {
      seq.push("FizzBuzz");
    } else if (i % 3 !== 0 && i % 5 !== 0) {
      seq.push(i.toString());
    }
  }
  return seq;
};
