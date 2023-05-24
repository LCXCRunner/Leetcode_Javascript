/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [2];
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                result[0] = i;
                result[1] = j;
            }
        }
    }
    return result;
};

// test cases
let tester = [1, 2, 3, 4];

console.log(twoSum(tester, 5));