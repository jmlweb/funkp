import assert from 'assert';

import first from './';

describe('first', () => {
    it('works with array of 3 strings', () => {
        const tested = first(['a', 'b', 'c'], 2);
        const expected = ['a', 'b'];
        assert.deepStrictEqual(tested, expected, 'Should return [a, b]');
    });
    it('works with big array', () => {
        const arr = Array.from({ length: 9999 }).map((v, k) => k + 1);
        const tested = first(arr, 2);
        const expected = [1, 2];
        assert.deepStrictEqual(tested, expected, 'Should return [1, 2]');
    });
});