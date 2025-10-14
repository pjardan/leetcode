/*

1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];

        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    result[0] = i;
                    result[1] = j;
                    return result;
                }
            }
        }

        result[1] = nums.length - 1

        return result;
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
console.log(twoSum([3,2,3], 6))
console.log(twoSum([-3,4,3,90], 0))

/* My Comment:
    - I used two loops to iterate through the array and check if the sum of two elements is equal to the target.
    - If it is, I store the indices in the result array and return it.
    - The time complexity of this solution is O(n^2) because of the nested loops.
    - The space complexity is O(1) because we are using a constant amount of space.
*/


// Other's Solution: Using Hash Map

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var hashMapTwoSum = function(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        // Find the complement that would sum with nums[i] to reach the target
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
};

console.log(hashMapTwoSum([2,7,11,15], 9))
console.log(hashMapTwoSum([3,2,4], 6))
console.log(hashMapTwoSum([3,3], 6))
console.log(hashMapTwoSum([3,2,3], 6))
console.log(hashMapTwoSum([-3,4,3,90], 0))

/* My Comment on Other's Solution:
    - This solution uses a hash map to store the elements and their indices as we iterate through the array.
    - For each element, we calculate its complement (target - current element) and check if it exists in the map.
    - If it does, we return the indices of the complement and the current element.
    - This approach has a time complexity of O(n) because we only traverse the array once.
    - The space complexity is also O(n) due to the storage of elements in the hash map.
    - This is a more efficient solution compared to the brute-force approach.
*/