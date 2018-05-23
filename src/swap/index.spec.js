import assert from 'assert';

import swap from './';

describe('swap', () => {
  it('works with array of 3 strings', () => {
    const tested = swap(['a', 'b', 'c'], 2, 0);
    const expected = ['c', 'b', 'a'];
    assert.deepStrictEqual(tested, expected, 'Should return a swapped copy of the array');
  });
  it('works with big array', () => {
    const arr = Array.from({ length: 9999 }).map((v, k) => k + 1);
    const tested = swap(arr, 0, 1)[0];
    const expected = 2;
    assert.equal(tested, expected, 'Should return a swapped copy of the array');
  });
});
