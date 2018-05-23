import assert from 'assert';

import first from './';

describe('first', () => {
  it('returns empty array when no array is provided as parameter', () => {
    const tested = first(null, 3);
    const expected = [];
    assert.deepStrictEqual(tested, expected, 'Should return an empty array');
  });
  it('pass 1 as default n parameter', () => {
    const tested = first([1, 2, 3]);
    const expected = [1];
    assert.deepStrictEqual(tested, expected, 'should return [1]');
  });
  it('works with array of 3 strings', () => {
    const tested = first(['a', 'b', 'c'], 2);
    const expected = ['a', 'b'];
    assert.deepStrictEqual(tested, expected, 'Should return [a, b]');
  });
  it('works with big array', () => {
    const arr = Array.from({ length: 9999 }).map((v, k) => k + 1);
    const tested = first(arr, 2);
    const expected = [1, 2];
    assert.deepStrictEqual(tested, expected, 'Should return [1, 2]');
  });
});
