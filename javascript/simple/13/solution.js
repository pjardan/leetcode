/*
13. Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000


For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. 
Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

exception:

I can be placed before V (5) and X (10) to make 4 and 9. (IV) e (IX)
X can be placed before L (50) and C (100) to make 40 and 90. (XL) e (XC)
C can be placed before D (500) and M (1000) to make 400 and 900. (CD) e (CM)

*/


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const exceptions = {
        'IV': 4, 'IX': 9,
        'XL': 40, 'XC': 90,
        'CD': 400, 'CM': 900
    };
    
    const values = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let sum = 0;
    
    for(let i = 0; i < s.length; i++){
        const twoChar = s[i] + s[i+1];
        
        if(exceptions[twoChar]){
            sum += exceptions[twoChar];
            i++;
        } else {
            sum += values[s[i]];
        }
    }
    
    return sum;
};


// romanToInt('III')
console.log(romanToInt('III')) // 3
// romanToInt('LVIII')
console.log(romanToInt('LVIII')) // 58
// romanToInt('MCMXCIV')
console.log(romanToInt('MCMXCIV')) // 1994
// romanToInt('III')

// My Comment:
// - I created a map to store the exceptions where subtraction is used.
// - I then iterated through the string, checking for these exceptions first.
// - If an exception is found, I add its value to the sum and skip the next character.
// - If no exception is found, I add the value of the current character to the sum.
// - The time complexity of this solution is O(n) where n is the length of the string.
// - The space complexity is O(1) because the size of the map is constant.