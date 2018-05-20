import assert from 'assert';

import copy from './';

describe('copy', () => {
    it('works with array of 3 strings', () => {
        const tested = copy(['a', 'b', 'c']);
        const expected = ['a', 'b', 'c'];
        assert.deepStrictEqual(tested, expected, 'Should return a copy of the array');
    });
    it('works with big array', () => {
        const tested = copy(['a', ...Array.from({ length: 9999 })]);
        const expected = ['a', ...Array.from({ length: 9999 })];
        assert.deepStrictEqual(tested, expected, 'Should return a copy of the array');
    });
});