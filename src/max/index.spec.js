import assert from 'assert';

import max from './';

describe('max', () => {
  it('returns -Infinity if array is empty', () => {
    const tested = max([]);
    const expected = -Infinity;
    assert.equal(tested, expected, 'Should return -Infinity');
  });
  it('works with array of 3 numbers', () => {
    const tested = max([2, 1, 3]);
    const expected = 3;
    assert.equal(tested, expected, 'Should return 3');
  });
  it('works with big array', () => {
    const arr = Array.from({ length: 9999 }).map((v, k) => k + 1);
    const tested = max(arr);
    const expected = 9999;
    assert.equal(tested, expected, 'Should return 9999');
  });
});
