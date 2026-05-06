/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1);
            }
            left--;
            right++;
        }   
        // Even length palindromes
        left = i, right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1);
            }
            left--;
            right++;
        }
    }
    return longest;
};

console.log(longestPalindrome("babad")); // "aba" or "bab"
console.log(longestPalindrome("cbbd")); // "bb"

// Time Complexity: O(n^2) where n is the length of the input string, due to the nested loops.
// Space Complexity: O(1) if we ignore the space used for the output string, otherwise O(n) for the longest palindrome substring.