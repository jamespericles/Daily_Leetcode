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
//   IP6 = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";

let validIPAddress = (IP) => {
  // first check, determine if the IP address is IPv4 or IPv6. Biggest difference between the two is the seperator being a '.' or ':' respectively
  if (IP.includes(".") === true) {
    // the checks for both IPv4 and IPv6 are different, if the string contains a '.', use the appropriate IPv4 checks
    console.log("IP Address contains a period, it isn't IP6");

    // split the IP for the appropriate IPv4 checks (which differ from the IPv6 checks)
    let splitIP4 = IP.split(".");

    for (let i = 0; i < splitIP4.length; i++) {
      let current = splitIP4[i];
      // check if there is an empty bit in the address
      if (splitIP4[i].length == 0) {
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
  } else if (IP.includes(":") === true) {
    let splitIP6 = IP.split(":");
  } else {
    // if the IP doesn't contain either a '.' or ':', then it is neither IPv4 or IPv6
    return "Neither";
  }
};
