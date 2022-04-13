const calculadora = require("./calculator");

describe("Given the funnction calculadora", () => {
  describe("When it recieves 6 and 7", () => {
    test("Then it should return an Array of 6 numbers", () => {
      const x = 6;
      const y = 7;
      const expectedResult = [13, -1, 42, 0.857, 2.449, 2.646];

      const result = calculadora(6, 7);

      expect(result).toBe(expectedResult);
    });
  });
});
