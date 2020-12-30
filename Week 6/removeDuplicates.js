/**
 * Prompt:
 *
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 * Example:
 *      Input: 1->1->2
 *      Output: 1->2
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let head = [1, 1, 2]; // should return [1,2]

let deleteDuplicates = (head) => {
  if (!head) return null;
  // Init prev as 1st node, next as 2nd node
  let prev = head,
    next = head.next;

  // Iterate until next is null, which is end of list
  while (next) {
    if (prev.val === next.val) {
      // If next is a duplicate, skip over it by pointing its prev to its next
      prev.next = next.next;
    } else {
      // Else, just move prev forward to continue through the list
      prev = prev.next;
    }
    // Always move next forward, it moves along with prev
    next = next.next;
  }

  return head;
};

let array = [1, 1, 2];

// I wrote a second solution that expects an array rather than a linked list
let deleteDuplicatesArray = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // if we find a duplicate value, splice it from our array
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
