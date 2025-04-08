var merge = function (nums1, m, nums2, n) {
  let ptr1 = m - 1;
  let ptr2 = n - 1;
  let mergedPtr = m + n - 1;
  while (ptr2 >= 0) {
    if (ptr1 >= 0 && nums1[ptr1] > nums2[ptr2]) {
      nums1[mergedPtr] = nums1[ptr1];
      ptr1--;
    } else {
      nums1[mergedPtr] = nums2[ptr2];

      ptr2--;
    }
    mergedPtr--;
  }
};

/* second */

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

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

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};
