// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    // 创建 MAP
    const map = new Map();
    // 由于第一个元素在它之前一定没有元素与之匹配，所以先存入哈希表
    map.set(nums[0], 0);
    for (let i = 1; i < len; i++) {
        // 提取共用
        let other = target - nums[i];
        // 判断是否符合条件，返回对应的下标
        if (map.get(other) !== undefined) return [map.get(other), i];
        // 不符合的存入hash表
        map.set(nums[i], i)
    }
};

// use node test 
var nums = [2,7,9,11]
var target = 9
console.log(twoSum(nums,target)) // [0,1]

var nums = [3,2,4]
var target = 6
console.log(twoSum(nums,target)) // [1,2]

var nums = [3,3]
var target = 6
console.log(twoSum(nums,target)) // [0,1]