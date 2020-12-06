/*
    Prompt:

    Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

    You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

    https://leetcode.com/problems/minimum-index-sum-of-two-lists/
*/

let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  list2 = [
    "Piatti",
    "The Grill at Torrey Pines",
    "Hungry Hunter Steakhouse",
    "Shogun",
  ];

let findRestaurant = (list1, list2) => {
  // store our shared restaurants in this array, we'll return this later
  let shared = [];

  list1.sort();
  list2.sort();

  //   by only using one for loop, the efficiency is much higher
  for (var i = 0; i < list1.length; i += 1) {
    if (list2.indexOf(list1[i]) > -1) {
      ret.push(list1[i]);
    }
  }

  return shared;
};
