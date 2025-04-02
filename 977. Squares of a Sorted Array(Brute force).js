/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squares = nums.map(num => num * num);
    return squares.sort((a, b) => a - b);
};

/*------------------Alternative------------------------------*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   let newArray = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        newArray[i] = nums[i] * nums[i];  // Squaring each element
    }
    newArray.sort((a, b) => a - b);  // Sorting the array of squared numbers
    return newArray;
};