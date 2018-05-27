import assert from 'assert';

import min from './';

describe('min', () => {
  it('returns Infinity if array is empty', () => {
    const tested = min([]);
    const expected = Infinity;
    assert.equal(tested, expected, 'Should return Infinity');
  });
  it('works with array of 3 numbers', () => {
    const tested = min([1, 2, 3]);
    const expected = 1;
    assert.equal(tested, expected, 'Should return 1');
  });
  it('works with big array', () => {
    const arr = Array.from({ length: 9999 }).map((v, k) => k + 1);
    const tested = min(arr);
    const expected = 1;
    assert.equal(tested, expected, 'Should return 1');
  });
});
