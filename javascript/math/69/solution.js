// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    let left = 1;
    let right = Math.floor(x / 2);

    if (x < 2) {
        return x;
    }

    console.log("Initial left:", left, "Initial right:", right);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midSquared = mid * mid;
        console.log("Mid:", mid, "Mid Squared:", midSquared);
        
        if (midSquared === x) {
            return mid;
        }
        if (midSquared < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }   
        console.log("Updated left:", left, "Updated right:", right);
    }

    return right;

    
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(0));
console.log(mySqrt(1));

/*
Time Complexity: O(log n) where n is the input number x. The binary search algorithm divides the search space in half with each iteration, leading to logarithmic time complexity.
Space Complexity: O(1) since we are using a constant amount of space to store the left, right, mid, and midSquared variables. The space used does not grow with the input size.
*/