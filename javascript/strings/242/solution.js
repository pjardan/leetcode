/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let lenghtInitial = s.length;
    let lenghtFinal = t.length;

    if(lenghtInitial != lenghtFinal){
        return false;
    }

    return [...s].sort().join('') === [...t].sort().join('');
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "ab")); // false

// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n) for the sorted arrays