/*

9. Palindrome Number
Easy
Topics
premium lock icon
Companies
Hint
Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 
*/


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let base_string = x.toString();
    let inverted = [];

    for(let i = base_string.length - 1; i >= 0; i--){
        inverted.push(base_string[i]); 
    }

    let inverted_string = inverted.join(''); 
    return inverted_string === base_string; 
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))

/* My Comment:
    - I converted the number to a string and then created an inverted version of the string by iterating through it backwards.
    - Finally, I compared the original string with the inverted string to check if they are the same.
    - The time complexity of this solution is O(n) where n is the number of digits in the number.
    - The space complexity is also O(n) because we are using an array to store the inverted string.
*/

