const express = require("express");
const {
  calcMode,
  calcMean,
  calcMedian,
  freqCounter,
  convertAndValidateNumsArray,
} = require("./formulas");
const ExpressError = require("./errors");

const app = express();

app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("Invalid number input", 400);
  }
  let numsValidate = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsValidate);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mean",
    result: calcMean(nums),
  };

  return res.send(result);
});

app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("Invalid number input", 400);
  }
  let numsValidate = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsValidate);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "median",
    result: calcMedian(nums),
  };

  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("Invalid number input", 400);
  }
  let numsValidate = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsValidate);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mode",
    result: calcMode(nums),
  };

  return res.send(result);
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
