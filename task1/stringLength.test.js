const stringLength = require('./stringLength');

describe('Correct count of characters', () => {
  test('A has to return 1 character', () => {
    const string = 'A';
    const result = stringLength(string);
    expect(result).toBe(1);
  });

  test('Hello has to return 5 characters', () => {
    const string = 'Hello';
    const result = stringLength(string);
    expect(result).toBe(5);
  });

  test('Hi has to return 2 characters', () => {
    const string = 'Hi';
    const result = stringLength(string);
    expect(result).toBe(2);
  });

  test('Hello World has to return 10 characters', () => {
    const string = 'Hello World';
    const result = stringLength(string);
    expect(result).toBe(10);
  });
});

describe('Uncorrect count of characters', () => {
  test('Ramiro is not 4 characters', () => {
    const string = 'Ramiro';
    const result = stringLength(string);
    expect(result).not.toBe(4);
  });

  test('Hi is not 1 characters', () => {
    const string = 'Hi';
    const result = stringLength(string);
    expect(result).not.toBe(1);
  });
});

describe('Invalid strings parameters less than 1', () => {
  test('Empty String has to throw an error because its less than 1 char', () => {
    const string = '';
    try {
      stringLength(string);
    } catch (e) {
      expect(e.message).toBe('Invalid string length');
    }
  });
});

describe('Invalid strings parameters bigger than 10', () => {
  test('Hello Amazing World has to throw an error is bigger than 10 char - Has 17 chars', () => {
    const string = 'Hello Amazing World';
    try {
      stringLength(string);
    } catch (e) {
      expect(e.message).toBe('Invalid string length');
    }
  });
});
