/**
 * Prompt:
 *
 * Given a date string in the form Day Month Year, where:
 *
 * Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
 * Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
 * Year is in the range [1900, 2100].
 * Convert the date string to the format YYYY-MM-DD, where:
 *
 * YYYY denotes the 4 digit year.
 * MM denotes the 2 digit month.
 * DD denotes the 2 digit day.
 *
 * Example:
 *
 * Input: date = "20th Oct 2052"
 * Output: "2052-10-20"
 */

/**
 * @param {string} date
 * @return {string}
 */

let date = "20th Oct 2052";

let reformatDate = (date) => {
  // "20th Oct 2052" ->  ["20th", "Oct", "2052"]
  let dateArr = date.split(" ");

  // ["20th", "Oct", "2052"] -> ["2052", "Oct", "20th"]
  let formattedArr = dateArr.reverse();

  // the expression to be evaluated is what month was given
  switch (formattedArr[1]) {
    // convert from three letter string to string of corresponding numbers
    case "Jan":
      formattedArr[1] = "01";
      break;
    case "Feb":
      formattedArr[1] = "02";
      break;
    case "Mar":
      formattedArr[1] = "03";
      break;
    case "Apr":
      formattedArr[1] = "04";
      break;
    case "May":
      formattedArr[1] = "05";
      break;
    case "Jun":
      formattedArr[1] = "06";
      break;
    case "Jul":
      formattedArr[1] = "07";
      break;
    case "Aug":
      formattedArr[1] = "08";
      break;
    case "Sep":
      formattedArr[1] = "09";
      break;
    case "Oct":
      formattedArr[1] = "10";
      break;
    case "Nov":
      formattedArr[1] = "11";
      break;
    case "Dec":
      formattedArr[1] = "12";
      break;
  }
  // similar to the first switch statement, here we're evaluating what the day is and converting from 1st -> 01 and so on
  switch (formattedArr[2]) {
    case "1st":
      formattedArr[2] = "01";
      break;
    case "2nd":
      formattedArr[2] = "02";
      break;
    case "3rd":
      formattedArr[2] = "03";
      break;
    case "4th":
      formattedArr[2] = "04";
      break;
    case "5th":
      formattedArr[2] = "05";
      break;
    case "6th":
      formattedArr[2] = "06";
      break;
    case "7th":
      formattedArr[2] = "07";
      break;
    case "8th":
      formattedArr[2] = "08";
      break;
    case "9th":
      formattedArr[2] = "09";
      break;
    case "10th":
      formattedArr[2] = "10";
      break;
    case "11th":
      formattedArr[2] = "11";
      break;
    case "12th":
      formattedArr[2] = "12";
      break;
    case "13th":
      formattedArr[2] = "13";
      break;
    case "14th":
      formattedArr[2] = "14";
      break;
    case "15th":
      formattedArr[2] = "15";
      break;
    case "16th":
      formattedArr[2] = "16";
      break;
    case "17th":
      formattedArr[2] = "17";
      break;
    case "18th":
      formattedArr[2] = "18";
      break;
    case "19th":
      formattedArr[2] = "19";
      break;
    case "20th":
      formattedArr[2] = "20";
      break;
    case "21st":
      formattedArr[2] = "21";
      break;
    case "22nd":
      formattedArr[2] = "22";
      break;
    case "23rd":
      formattedArr[2] = "23";
      break;
    case "24th":
      formattedArr[2] = "24";
      break;
    case "25th":
      formattedArr[2] = "25";
      break;
    case "26th":
      formattedArr[2] = "26";
      break;
    case "27th":
      formattedArr[2] = "27";
      break;
    case "28th":
      formattedArr[2] = "28";
      break;
    case "29th":
      formattedArr[2] = "29";
      break;
    case "30th":
      formattedArr[2] = "30";
      break;
    case "31st":
      formattedArr[2] = "31";
      break;
  }

  // ["2052", "10", "20"] -> "2052-10-20"
  return formattedArr.join("-");
};

// This may be an incredibly lengthy/ugly solution for trimming the day down to double digits, but somehow this was faster than 91.22% of other solutions... go figure
