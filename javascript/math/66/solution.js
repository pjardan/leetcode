/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length;

    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            if (i === 0) {
                digits[i] = 0;
                digits.unshift(1);
                return digits;
            }
            digits[i] = 0;
        }
    }
};

console.log(plusOne([9,9,9])); // [1,0,0,0]
console.log(plusOne([1,2,3])); // [1,2,4]
console.log(plusOne([4,3,2,1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]

// Time Complexity: O(N) where N is the length of digits
// Space Complexity: O(1)