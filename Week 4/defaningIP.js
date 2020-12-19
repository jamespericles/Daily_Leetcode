/* 
    Prompt:

    Given a valid (IPv4) IP address, return a defanged version of that IP address.

    A defanged IP address replaces every period "." with "[.]".


    https://leetcode.com/problems/defanging-an-ip-address/
*/

let address = "1.1.1.1";

let defangIPaddr = (address) => {
  // Fairly simple solution utilize replace with a regex expression as our first argument. Its important to note that you need to escape the '.', otherwise the regex expression will treat every character as if it were a .
  let output = address.replace(/\./gi, "[.]");
  return output;
};

// Time and space complexity is both O(1), we always pass in one variable and are always returned one variable, no matter the length of address
