import { split, getOdds } from "../src";

describe("getOdds", function () {
  it("should return odd numbers from an array of numbers", () => {
    const numbers = [1, 2, 3, 4];
    expect(getOdds(numbers)).toEqual([1, 3]);
  });
});

describe("splits numbers into evens and odss", function () {
  it("should return addition of two numbers", () => {
    const numbers = [1, 2, 3, 4];
    expect(split(numbers)).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });
});
