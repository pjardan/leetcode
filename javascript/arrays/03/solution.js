/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = new Map();
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }
        charIndexMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;    
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));    // Output: 3

// Time Complexity: O(n) where n is the length of the input string.
// Space Complexity: O(min(m, n)) where m is the size of the character set and n is the length of the input string.