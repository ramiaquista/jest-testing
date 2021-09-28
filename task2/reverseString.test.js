const reverseString = require('./reverseString');

describe('Correct reversed string', () => {
    test('Hello has to be olleH', () => {
        const string = 'Hello';
        const result = reverseString(string);
        expect(result).toBe('olleH');
    })

    test('Hello World has to be dlroW olleH', () => {
        const string = 'Hello World';
        const result = reverseString(string);
        expect(result).toBe('dlroW olleH');
    })
});

describe('Uncorrect reversed string', () => {
    test('Ramiro not to be Ramiro', () => {
        const string = 'Ramiro';
        const result = reverseString(string);
        expect(result).not.toBe('Ramiro');
    })
})