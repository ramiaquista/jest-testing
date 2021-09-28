class Calculator {
  static add(x, y) {
    return x + y;
  }
  static substract(x, y) {
    return x - y;
  }
  static divide(x, y) {
    if (y === 0) {
      throw new Error('Impossible dividing by zero');
    } else {
      return x / y;
    }
  }
  static multiply(x, y) {
    return x * y;
  }
}

module.exports = Calculator;
