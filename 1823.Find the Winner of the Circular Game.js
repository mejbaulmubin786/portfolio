/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  function josephus(n) {
    if (n === 1) {
      return 0;
    }
    // Recursive case
    return (josephus(n - 1) + k) % n;
  }

  return josephus(n) + 1;
};
