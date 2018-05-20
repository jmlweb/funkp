import assert from 'assert';

import tail from './';

describe('tail', () => {
    it('works with array of 3 strings', () => {
        const tested = tail(['a', 'b', 'c']);
        const expected = ['b', 'c'];
        assert.deepStrictEqual(tested, expected, 'Should return remaining items in array');
    });
});