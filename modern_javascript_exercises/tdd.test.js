import { maxNumber } from "../maxNumber.js";

describe("Maximum number", () => {
  test("returns maximum number from array", () => {
    expect(maxNumber([10, 2, 3, 5, 6])).toBe(10);
  });
});
