import assert from 'assert';

import min from './';

describe('min', () => {
  // it('pass 1 as default n parameter', () => {
  //   const tested = first([1, 2, 3]);
  //   const expected = [1];
  //   assert.deepStrictEqual(tested, expected, 'should return [1]');
  // });
  it('works with array of 3 numbers', () => {
    const tested = min([1, 2, 3]);
    const expected = 1;
    assert.deepStrictEqual(tested, expected, 'Should return 1');
  });
  // it('works with big array', () => {
  //   const arr = Array.from({ length: 9999 }).map((v, k) => k + 1);
  //   const tested = first(arr, 2);
  //   const expected = [1, 2];
  //   assert.deepStrictEqual(tested, expected, 'Should return [1, 2]');
  // });
});
