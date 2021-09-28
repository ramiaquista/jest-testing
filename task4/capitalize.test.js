const capitalize = require('./capitalize');

describe('Correct capitalize of a string', () => {
    test('hello has to be Hello', () => {
        const string = 'hello';
        const result = capitalize(string);
        expect(result).toBe('Hello');
    })

    test('ramiro has to be Ramiro', () => {
        const string = 'ramiro';
        const result = capitalize(string);
        expect(result).toBe('Ramiro');
    })

    test('hi has to be Hi', () => {
        const string = 'hi';
        const result = capitalize(string);
        expect(result).toBe('Hi');
    })

    test('a has to be A', () => {
        const string = 'a';
        const result = capitalize(string);
        expect(result).toBe('A');
    })
})