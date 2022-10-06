function freqCounter(arr) {
  return arr.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

function convertAndValidateNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]);

    if (Number.isNaN(valToNumber)) {
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valToNumber);
  }
  return result;
}

function calcMean(nums) {
  if (nums.length === 0) return 0;
  return (
    nums.reduce(function (n, i) {
      return n + i;
    }) / nums.length
  );
}

function calcMode(arr) {
  let freq = freqCounter(arr);
  let total = 0;
  let result;

  for (let i in freq) {
    if (freq[i] > total) {
      result = i;
      total = freq[i];
    }
  }
  return +result;
}

function calcMedian(nums) {
  nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }
  return median;
}

module.exports = {
  calcMean,
  calcMedian,
  calcMode,
  freqCounter,
  convertAndValidateNumsArray
};
