/*

20. Valid Parentheses
Easy
Topics
premium lock icon
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in mapping) {  // É um fechamento
            if (stack.length === 0 || stack[stack.length - 1] !== mapping[char]) {
                return false;
            }
            stack.pop();
        } else {  // É uma abertura
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([])"))
console.log(isValid("([)]"))
console.log(isValid("(){}}{"))

// MY SOLUTION FOR PROBLEM
/* valid parentheses
    Check if the parentheses are valid using a stack
    COMPLEXITY: O(N) where N is the length of the string
*/