/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    if (s.length <= 2) return s;

    let res = '';
    let count = 0;
    let prev = '';

    for (const ch of s) {
        if (ch === prev) {
            count++;
        } else {
            prev = ch;
            count = 1;
        }

        if (count <= 2) {
            res += ch;
        }
    }

    return res;
};

console.log(makeFancyString("leeetcode"));    // "leetcode"
console.log(makeFancyString("aaabaaaa"));     // "aabaa"
console.log(makeFancyString("aab"));          // "aab"
console.log(makeFancyString("a"));            // "a"
console.log(makeFancyString("aa"));           // "aa"
console.log(makeFancyString("aabaabaabaa"));  // "aabaabaabaa" 

// Time Complexity: O(N) where N is the length of s
// Space Complexity: O(N) for the result string