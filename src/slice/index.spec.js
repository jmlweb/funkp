import assert from 'assert';

import slice from './';

describe('slice', () => {
    it('works with array of 3 strings', () => {
        const tested = slice(['a', 'b', 'c', 'd'], 1, 3);
        const expected = ['b', 'c'];
        assert.deepStrictEqual(tested, expected, 'Should return [b, c]');
    });
    it('works with array of 3 strings to Infinity', () => {
        const tested = slice(['a', 'b', 'c', 'd'], 1, Infinity);
        const expected = ['b', 'c', 'd'];
        assert.deepStrictEqual(tested, expected, 'Should return [b, c, d]');
    });
    it('works with big array', () => {
        const arr = Array.from({ length: 9999 }).map((v, k) => k + 1);
        const tested = slice(arr, 0, 1);
        const expected = [1];
        assert.deepStrictEqual(tested, expected, 'Should return [1]');
    });
    it('works with negative to', () => {
        const tested = slice(['a', 'b', 'c', 'd'], 0, -1);
        const expected = ['a', 'b', 'c'];
        assert.deepStrictEqual(tested, expected, 'Should return [b, c]');
    });
});