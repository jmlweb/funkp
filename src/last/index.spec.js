import assert from 'assert';

import last from './';

describe('last', () => {
    it('works with array of 3 strings', () => {
        const tested = last(['a', 'b', 'c'], 2);
        const expected = ['b', 'c'];
        assert.deepStrictEqual(tested, expected, 'Should return [b, c]');
    });
    it('works with big array', () => {
        const arr = Array.from({ length: 9999 }).map((v, k) => k + 1);
        const tested = last(arr, 2);
        const expected = [9998, 9999];
        assert.deepStrictEqual(tested, expected, 'Should return [9998, 9999]');
    });
});