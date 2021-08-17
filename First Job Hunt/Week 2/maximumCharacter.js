/* 
    Prompt:

    Given a string of ASCII characters, return which character occurs in the string the most. If there is a tie, return whichever character occurs first

    No URL for this one, this was part of a hiring assessment instead of leetcode
*/

let text = "abbbaacc"; //Should return a

let maximumOccurringCharacter = (text) => {
  var max = 0,
    maxChar = "";

  // split each letter in text variable and compare their length.
  text.split("").forEach(function (char) {
    // if a char length is greater than our max, set max to it for future comparisons and set maxChar (what we'll return later) to be that later.
    // if we find that another character occurs more, we redo those steps
    if (text.split(char).length > max) {
      max = text.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};
