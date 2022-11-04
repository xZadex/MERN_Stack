// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

const nums4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,-5]
const targetSum4 = 21


/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum(nums, targetSum) {
    let myObj = {}

    for(let i=0; i<nums.length;i++){
        if(myObj[targetSum - nums[i]]){
            return [myObj[targetSum - nums[i]], i]
        } else {
            myObj[nums[i]] = i
        }
    }

    // for(let i=0; i<nums.length;i++){
    //     if(nums.includes(targetSum - nums[i] ) && i !== nums.indexOf(targetSum - nums[i])){
    //         return [i,nums.indexOf(targetSum - nums[i])]
    //     }
    // }
}
console.log(twoSum(nums3, targetSum3))
/*****************************************************************************/