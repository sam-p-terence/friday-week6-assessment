const {shuffleArray} = require('./utils')


let shuffleTestArray = [1, 'Test', false, 42, 'huh?', true, "Star Trek is better than Star Wars", 8]

describe('shuffleArray should', () => {
    test('name', () => {
        // array
        expect(Array.isArray(['value'])).toBe(true);
        // string
        expect(typeof 'value').toBe('string');
        // object
        expect({value: 'value'}).toBeTruthy();
        expect(typeof {value: 'value'}).toBe('object');
    }),

    // test('Check if array returns with the same length as argument', () => {
    //     expect(shuffleArray(shuffleTestArray)).toBe(false)
    // })

    // test("Return 1", () => {
    //     expect(shuffleArray.newTestArray()).toBe([0])
    // })

    test('Check if all items are shuffled', () => {
        expect(shuffleArray.isArray)
    })
})