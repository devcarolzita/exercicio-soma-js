const somar = require('../src/somar');

describe("Função Soma", () => {
  it("deve somar dois números positivos", () => {
    expect(somar(2, 3)).toBe(5);
  });

  it("deve somarr dois números negativos", () => {
    expect(somar(-2, -5)).toBe(-7);
  });

  it("deve somarr zero com um número", () => {
    expect(somar(0, 10)).toBe(10);
    expect(somar(5, 0)).toBe(5);
  });
});
