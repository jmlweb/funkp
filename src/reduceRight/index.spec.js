import assert from 'assert';

import reduceRight from './';
import map from '../map';

describe('reduceRight', () => {
  it('works without array', () => {
    const tested = reduceRight(undefined, undefined, 0);
    const expected = 0;
    assert.equal(tested, expected, 'Should return 0');
  });
  it('works with array of 3', () => {
    const tested = reduceRight([1, 2, 3], (acc, curr) => [...acc, curr], []);
    const expected = [3, 2, 1];
    assert.deepStrictEqual(tested, expected, 'Should return [3, 2, 1]');
  });
  it('works with big array', () => {
    const arr = map(Array.from({ length: 9996 }), (v, k) => k + 1);
    const tested = reduceRight(arr, (acc, curr) => [...acc, curr], [1, 2, 3]).length;
    const expected = 9999;
    assert.equal(tested, expected, 'Should return 9999');
  });
});
