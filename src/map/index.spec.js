import assert from 'assert';

import map from './';

describe('map', () => {
  it('works with array of 3 strings', () => {
    const tested = map([1, 2, 3], v => v * 2);
    const expected = [2, 4, 6];
    assert.deepStrictEqual(tested, expected, 'Should return an array with each item doubled');
  });
  it('works with big array', () => {
    const arr = Array.from({ length: 9999 });
    const tested = map(arr, (v, k) => k + 1)[9998];
    const expected = 9999;
    assert.equal(tested, expected, 'Should return 9999');
  });
});
