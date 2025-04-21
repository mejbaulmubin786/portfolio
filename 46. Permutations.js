var permute = function(nums) {
    let res = [];
    let n = nums.length;

    function helper(i) {
        if (i === n - 1) {
            res.push([...nums]); // Make a copy of nums to store in results
            return;
        }
        for (let j = i; j < n; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap elements
            helper(i + 1);
            [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap back to backtrack
        }
    }

    helper(0);
    return res;
};
