/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0;

    while(index < nums.length){
        if(nums[index] >= target){
            return index;
        }

        if(index === nums.length - 1){
            return nums.length;
        }


        index++;
    }
    
 
};

console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4
console.log(searchInsert([1,3,5,6], 0)); // 0

// Time Complexity: O(N) where N is the length of nums
// Space Complexity: O(1)

// Version: O (log N) using Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return left;
} 
console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4
console.log(searchInsert([1,3,5,6], 0)); // 0



