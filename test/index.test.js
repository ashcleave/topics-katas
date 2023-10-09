import { split } from "../src";

describe("splits numbers into evens and odss", function () {
  it("should return addition of two numbers", () => {
    const numbers = [1, 2, 3, 4];
    expect(split(numbers)).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });
});
