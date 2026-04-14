
/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();   
    let lastWord = s.split(" ").slice(-1)[0];
    return lastWord.length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

/*
Time Complexity: O(n) where n is the length of the input string s. The trim() method and split() method both operate in linear time relative to the length of the string.
Space Complexity: O(n) in the worst case, if the input string consists of a single word without any spaces. In this case, the split() method would create an array with one element, which is the entire string. However, in general, the space complexity can be considered O(1) if we ignore the space used for the output and intermediate variables.
*/