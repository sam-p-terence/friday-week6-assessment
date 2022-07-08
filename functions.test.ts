import { convertToObject } from "typescript";

const {shuffleArray} = require('./utils')


const shuffleTestArray = [1, 'Test', false, 42, 'huh?', true, "Star Trek is better than Star Wars", 8]
const testArr1 = [1,2,3,4]
const testArr2 = []
const testArr3 = [45,64,1,35,5]


describe('shuffleArray should', () => {
    test('array test', () => {
        // array
        expect(Array.isArray(['value'])).toBe(true);
        // string
        expect(typeof 'value').toBe('string');
        // object
        expect({value: 'value'}).toBeTruthy();
        expect(typeof {value: 'value'}).toBe('object');
    }),

    test('shuffleArray should return an arry', () => {
        expect(Array.isArray(shuffleArray(shuffleTestArray))).toBe(true)
    }),

    test('Check if all items are shuffled', () => {
        expect(shuffleArray.isArray)
    }),

    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
    }),

    test('have its output array have the same length as its input array', () => {
        expect(shuffleArray(testArr1).length).toBe(testArr1.length)
        expect(shuffleArray(testArr2).length).toBe(testArr2.length)
        expect(shuffleArray(testArr3).length).toBe(testArr3.length)
    })
})