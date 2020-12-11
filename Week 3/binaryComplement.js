/* 
    Prompt:

    Every non-negative integer N has a binary representation.  For example, 5 can be represented as "101" in binary, 11 as "1011" in binary, and so on.  Note that except for N = 0, there are no leading zeroes in any binary representation.

    The complement of a binary representation is the number in binary you get when changing every 1 to a 0 and 0 to a 1.  For example, the complement of "101" in binary is "010" in binary.

    For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.

    https://leetcode.com/problems/complement-of-base-10-integer/

*/

let N = 5; // should return 2

let bitwiseComplement = (N) => {
  // convert N to binary

  let binaryN = (N >>> 0).toString(2);
  console.log(`binaryN after conversion: ${binaryN}`);

  //  Regex solution to convert 0's to 1's

  let binaryNcomplement = binaryN
    .replace(/1/g, "x") // 1. convert '1' to temp char('x'), we do this first to not accidentally convert our 1's back to 1's in the next step
    .replace(/0/g, "1") // 2. convert '0' to '1'
    .replace(/x/g, "0"); // 3. convert temp char to '0'

  // Convert complement back to number and return result

  return parseInt(binaryNcomplement, 2);
};
