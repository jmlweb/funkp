import assert from 'assert';

import reduce from './';
import map from '../map';

describe('reduce', () => {
  it('works without array', () => {
    const tested = reduce(undefined, undefined, 0);
    const expected = 0;
    assert.equal(tested, expected, 'Should return 0');
  });
  it('works with array of 3 strings', () => {
    const tested = reduce([1, 2, 3], (acc, curr) => acc + curr, 0);
    const expected = 6;
    assert.equal(tested, expected, 'Should return 6');
  });
  it('works with big array', () => {
    const arr = map(Array.from({ length: 9996 }), (v, k) => k + 1);
    const tested = reduce(arr, (acc, curr) => [...acc, curr], [1, 2, 3]).length;
    const expected = 9999;
    assert.equal(tested, expected, 'Should return 9999');
  });
});
