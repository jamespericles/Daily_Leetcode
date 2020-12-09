/* 
    Prompt:
    
    Given a non-empty, singly linked list with head node head, return a middle node of linked list.

    If there are two middle nodes, return the second middle node.

    https://leetcode.com/problems/middle-of-the-linked-list/

    Two pointer problem. Have one pointer increment one at a time, the other twice as fast. Return the slower pointer's value once the fast pointer completes its loop. 
*/

// Fast pointer, slow pointer solution.

// Once the fast pointer reaches the end of the list, if the slow pointer was moving at half the speed, that means it must be in the middle

// Time complexity = O(n) such that n is the number of nodes. Space = O(1) given we always create the same variables and output the same thing, regardless of the size of our input n
let head = [1, 2, 3, 4, 5]; // should return 3

let middleNode = (head) => {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// Simpler answer, less efficient O(n) and O(n) space and time complexity

let middleNode = (head) => {
  let a = [head];

  while (a[a.length - 1].next !== null) a.push(a[a.length - 1].next);
  return a[Math.trunc(a.length / 2)];
};
