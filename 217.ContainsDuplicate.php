//First Solution
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function containsDuplicate($nums) {
        $nums2 = array_unique($nums);
        if(count($nums) != count($nums2)){
            return true;
        }

        return false;
        
    }
}

//Second Solution

class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function containsDuplicate($nums) {
        $numSet = [];
        
        foreach ($nums as $num) {
            if (isset($numSet[$num])) {
                return true;
            }
            $numSet[$num] = true;
        }
        
        return false;
    }
}
