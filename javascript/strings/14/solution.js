/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const s = strs[i];
    while (prefix.length > 0 && !s.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
    if (prefix === "") return "";
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));    // ""
console.log(longestCommonPrefix(["a"]));                      // "a"
console.log(longestCommonPrefix([""]));                       // ""
console.log(longestCommonPrefix(["ab", "a"]));                // "a"

// MY SOLUTION FOR PROBLEM
/* longest common prefix 
 the common prefix is the part that is the same in all strings from the beginning 
 COMPLEXITY: O(N*M) where N is the number of strings and M is the length of the shortest string
 */
