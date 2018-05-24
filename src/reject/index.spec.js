import assert from 'assert';

import reject from './';
import map from '../map';

describe('reject', () => {
  it('works with array of 3 strings', () => {
    const tested = reject([1, 2, 3], v => v % 2 === 0);
    const expected = [1, 3];
    assert.deepStrictEqual(tested, expected, 'Should return [1, 3]');
  });
  it('works with big array', () => {
    const arr = Array.from({ length: 9999 });
    const tested = reject(map(arr, (v, k) => k + 1), v => v % 2 === 0).length;
    const expected = 5000;
    assert.equal(tested, expected, 'Should return 5000');
  });
});
