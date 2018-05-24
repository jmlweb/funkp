import assert from 'assert';

import filter from './';
import map from '../map';

describe('filter', () => {
  it('works with array of 3 strings', () => {
    const tested = filter([1, 2, 3], v => v % 2 === 0);
    const expected = [2];
    assert.deepStrictEqual(tested, expected, 'Should return [2]');
  });
  it('works with big array', () => {
    const arr = Array.from({ length: 9999 });
    const tested = filter(map(arr, (v, k) => k + 1), v => v % 2 === 0).length;
    const expected = 4999;
    assert.equal(tested, expected, 'Should return 4999');
  });
});
