const Calculator = require('./calculator');

describe('Add operations', () => {
  test('2 plus 3 has to be 5', () => {
    const x = 2;
    const y = 3;
    const result = Calculator.add(x, y);
    expect(result).toBe(5);
  });

  test('10 plus 43 has to be 53', () => {
    const x = 10;
    const y = 43;
    const result = Calculator.add(x, y);
    expect(result).toBe(53);
  });

  test('12 plus 0 has to be 12', () => {
    const x = 12;
    const y = 0;
    const result = Calculator.add(x, y);
    expect(result).toBe(12);
  });

  test('204 plus 152 has to be 356', () => {
    const x = 204;
    const y = 152;
    const result = Calculator.add(x, y);
    expect(result).toBe(356);
  });
});

describe('Substract operations', () => {
  test('10 minus 7 has to be 3', () => {
    const x = 10;
    const y = 7;
    const result = Calculator.substract(x, y);
    expect(result).toBe(3);
  });

  test('1 minus 0 has to be 1', () => {
    const x = 1;
    const y = 0;
    const result = Calculator.substract(x, y);
    expect(result).toBe(1);
  });

  test('15 minus 15 has to be 0', () => {
    const x = 15;
    const y = 15;
    const result = Calculator.substract(x, y);
    expect(result).toBe(0);
  });

  test('22 minus 23 has to be -1', () => {
    const x = 22;
    const y = 23;
    const result = Calculator.substract(x, y);
    expect(result).toBe(-1);
  });
});

describe('Divide operations', () => {
  test('10 divided by 5 has to be 2', () => {
    const x = 10;
    const y = 5;
    const result = Calculator.divide(x, y);
    expect(result).toBe(2);
  });

  test('30 divided by 4 has to be 7.5', () => {
    const x = 30;
    const y = 4;
    const result = Calculator.divide(x, y);
    expect(result).toBe(7.5);
  });

  test('1 divided by 1 has to be 1', () => {
    const x = 1;
    const y = 1;
    const result = Calculator.divide(x, y);
    expect(result).toBe(1);
  });

  test('0 divided by 89 has to be 0', () => {
    const x = 0;
    const y = 89;
    const result = Calculator.divide(x, y);
    expect(result).toBe(0);
  });

  test('5 divided by 0 has to be invalid', () => {
    const x = 5;
    const y = 0;
    try {
      Calculator.divide(x, y);
    } catch (e) {
      expect(e.message).toBe('Impossible dividing by zero');
    }
  });
});

describe('Multiply operations', () => {
  test('10 multiplied by 2 has to be 20', () => {
    const x = 10;
    const y = 2;
    const result = Calculator.multiply(x, y);
    expect(result).toBe(20);
  });

  test('1 multiplied by 1 has to be 1', () => {
    const x = 1;
    const y = 1;
    const result = Calculator.multiply(x, y);
    expect(result).toBe(1);
  });

  test('0 multiplied by 7 has to be 0', () => {
    const x = 0;
    const y = 7;
    const result = Calculator.multiply(x, y);
    expect(result).toBe(0);
  });

  test('7 multiplied by 5 has to be 35', () => {
    const x = 7;
    const y = 5;
    const result = Calculator.multiply(x, y);
    expect(result).toBe(35);
  });
});
