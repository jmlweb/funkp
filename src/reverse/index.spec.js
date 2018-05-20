import assert from 'assert';

import reverse from './';

describe('reverse', () => {
    it('works with array of 3 strings', () => {
        const tested = reverse(['a', 'b', 'c']);
        const expected = ['c', 'b', 'a'];
        assert.deepStrictEqual(tested, expected, 'Should return a reversed copy of the array');
    });
    it('works with big array', () => {
        const arr = Array.from({ length: 99 }).map((v, k) => k + 1);
        const tested = reverse(arr)[0];
        const expected = 99;
        assert.equal(tested, expected, 'Should return a reversed copy of the array');
    });
});