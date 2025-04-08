/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // `ptr1` `nums1` এর শেষ মার্জ করা উপাদানের ইন্ডেক্স নির্দেশ করে
    let ptr1 = m - 1;
    // `ptr2` `nums2` এর শেষ উপাদানের ইন্ডেক্স নির্দেশ করে
    let ptr2 = n - 1;
    // `mergedPtr` `nums1` এর শেষ ইন্ডেক্স নির্দেশ করে যেখানে মার্জ করা উপাদান বসানো হবে
    let mergedPtr = m + n - 1;

    // যতক্ষণ না `nums2` এর সব উপাদান প্রক্রিয়া করা হয়
    while (ptr2 >= 0) {
        // যদি `nums1` এ এখনও উপাদান থাকে এবং `nums1` এর বর্তমান উপাদান `nums2` এর বর্তমান উপাদানের চেয়ে বড় হয়
        if (ptr1 >= 0 && nums1[ptr1] > nums2[ptr2]) {
            // `nums1` এর বড় উপাদানটিকে মার্জ করা অবস্থানে বসানো হয়
            nums1[mergedPtr] = nums1[ptr1];
            // `nums1` এর আগের উপাদানের দিকে পয়েন্টার সরানো হয়
            ptr1--;
        } else {
            // অন্যথায়, `nums2` এর বর্তমান উপাদানটিকে মার্জ করা অবস্থানে বসানো হয়
            nums1[mergedPtr] = nums2[ptr2];
            // `nums2` এর আগের উপাদানের দিকে পয়েন্টার সরানো হয়
            ptr2--;
        }
        // মার্জ করা অ্যারের আগের অবস্থানের দিকে পয়েন্টার সরানো হয়
        mergedPtr--;
    }
};


/* second */

function merge(nums1, m, nums2, n) {
    let p1 = m - 1;          // nums1 এর শেষ কার্যকর উপাদানের ইন্ডেক্স
    let p2 = n - 1;          // nums2 এর শেষ উপাদানের ইন্ডেক্স
    let p = m + n - 1;       // মার্জ করার জন্য nums1 এর একদম শেষ পজিশন

    // দুই অ্যারে মিলিয়ে যতক্ষণ উপাদান আছে, তুলনা করে বড়টাকে nums1[p]-তে বসাও
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // যদি nums2-তে কিছু উপাদান থেকে যায়, সেগুলো বসিয়ে দাও
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}
