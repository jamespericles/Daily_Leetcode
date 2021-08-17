/**
 * Prompt:
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed. If
 * reversing x causes the value to go outside the signed 32-bit integer range,
 * then return 0
 * 
 * https://leetcode.com/problems/reverse-integer/
 */

class Solution {
    public int reverse(int x) {

        int reversed = 0;

        while (x != 0) {
            int digit = x % 10;
            reversed = reversed * 10 + digit;
            x /= 10;
        }
        if (reversed > Integer.MAX_VALUE || reversed < Integer.MIN_VALUE) {
            return 0;
        }
        return reversed;
    }
}

/**
 * Stepwise, this solution: 
 *      1. Stores the last digit of x in digit with modulo 10 on line 18 
 *      2. That digit is added to reversed after multiplying reversed by 10, essentially giving it a new position 
 *          ie one spot to tens, tens to hundreds and so on 
 *      3. x is divided by 10 to do the opposite of step 2, moving the conditional one step closer to being true on 17
 *      4. Lastly, given the prompt, we want to make sure our value is within the bounds of a 32-bit system
 * 
 * Unfortunately the check (and several other formats) to make sure reversed is within our given range doesn't work properly, so I 
 * don't have stats for this solution.
 */

class Solution {
    public int reverse(int x) {

        long reverseNum=0;

        do {
            long remainder = x%10 ;
            x = x/10;
            reverseNum = reverseNum*10 + remainder; 
        }
        while(x!=0);  
        if(reverseNum >= Integer.MIN_VALUE && reverseNum <= Integer.MAX_VALUE) 
            return (int) reverseNum;
        return 0;
    }
}

/**
 * Above is a slight refactory with a runtime of 1ms (faster than 100.00%) and memory usage of
 * 35.6mb (less than 98.94%).
 */