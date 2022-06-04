function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2) => We have a nested loop with constant time operations inside of the inner loop.
*/

/* 
  Add your pseudocode here
  For each number i in the array
    For each number j in the array 
      If the sum of i and j equals target, we return true
*/    

/*
  Add written explanation of your solution here
  Perform a nested loop in which we observe the sum of every pair of 
  numbers and return true if it equals target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 25, 7], 25));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
