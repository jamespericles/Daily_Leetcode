/* 
    Prompt:

    Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

    A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses.

    A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

    1 <= xi.length <= 4
    xi is a hexadecimal string which may contain digits, lower-case English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
    Leading zeros are allowed in xi.

    https://leetcode.com/problems/validate-ip-address/

*/

let IP = "192.168.01.1";
let IP6 = "2001:0db8:85a3:0000:0000:8a2e:03704:7334";

let validIPAddress = (IP) => {
  let arr = [];

  // split the given string. If it contains a ',' then it will be passed into the IPv4 function, otherwise it'll be split at the ':' and be passed into IPv6
  arr = IP.split(".");
  if (arr.length == 1) {
    arr = IP.split(":");
  }

  // function for IPv4 credentials
  const IPv4 = () => {
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      // check if there is an empty bit in the address
      if (arr[i].length == 0) {
        return "Neither";
      }
      // check for negative numbers
      if (current[0] == "-") {
        return "Neither";
      }
      // check for alphabetical characters
      for (let t = 0; t < current.length; t++) {
        if (current.charCodeAt(t) > 64) {
          return "Neither";
        }
      }
      // check for bit with more than one 0
      if (Number(current) == 0 && current.length > 1) {
        return "Neither";
      }
      // check for leading 0's
      if (current[0] == "0" && current.length > 1) {
        return "Neither";
      }

      // check if any bit is larger than 255
      if (Number(current) > 255) {
        return "Neither";
      }
    }
    return "IPv4";
  };

  // function for IPv6 credentials
  const IPv6 = () => {
    for (let i = 0; i < 8; i++) {
      let current = arr[i];

      // if current bit is empty
      if (current.length == 0) {
        return "Neither";
      }

      // if current bit is a negative number
      if (current[0] == "-") {
        return "Neither";
      }

      // if current bit is more than four digits
      if (current.length > 4) {
        return "Neither";
      }

      // if current bit contains a letter that isnt a-f or A-F
      for (let t = 0; t < current.length; t++) {
        let code = current.charCodeAt(t);
        if ((code >= 103 && code <= 122) || (code >= 71 && code <= 90)) {
          return "Neither";
        }
      }
    }

    return "IPv6";
  };

  // if there are more than four bits in the array after splitting, it can't be IPv4
  if (arr.length == 4) {
    return IPv4(arr);
  }

  // if there are more than eight bits in the array after splitting, it can't be IPv6
  if (arr.length == 8) {
    return IPv6(arr);
  } else {
    // if the IP doesn't contain either a '.' or ':', or its length isn't either 4 or 8 bits long, then it is neither IPv4 or IPv6
    return "Neither";
  }
};

// After refactoring, this is fairly efficient boasting faster than 95.71% other solutions and less memory than 76.69% of other solutions
