// const isPerfectSquare = (num) => {
//   let squareRoot = (num) => {
//     let avg = (a, b) => (a + b) / 2,
//       c = 5,
//       b;
//     for (let i = 0; i < 20; i++) {
//       b = num / c;
//       c = avg(b, c);
//     }
//     num = c;
//     console.log(`num after first fxn: ${num}`);
//     let checkNum = (num) => {
//       squareRoot(num);
//       if (Number.isInteger(num) === true) {
//         return true;
//       } else {
//         return false;
//       }
//     };
//     checkNum();
//   };
//   console.log(`num before isPerfect: ${num}`);
// };

// const isPerfectSquare = (num) => {
//   let avg = (a, b) => (a + b) / 2,
//     b,
//     c = 5;
//   console.log(`declaration. b, c, num: ${b} ${c} ${num}`);
//   for (let i = 0; i < 20; i++) {
//     b = num / c;
//     c = avg(b, c);
//     console.log(`for loop. b, c, num: ${b} ${c} ${num}`);
//   }
//   console.log(`before if else. b, c, num: ${b} ${c} ${num}`);

//   if (Number.isInteger(num) === true) {
//     console.log(`return true. b, c, num: ${b} ${c} ${num}`);

//     return true;
//   } else {
//     console.log(`return false. b, c, num: ${b} ${c} ${num}`);

//     return false;
//   }
// };

const isPerfectSquare = (num) => {
  let x,
    x1 = num / 2;

  do {
    x = x1;
    x1 = (x + num / x) / 2;
  } while (x !== x1);
  if (Number.isInteger(x) === true) {
    return true;
  } else {
    return false;
  }
};
