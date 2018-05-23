import assert from 'assert';

import length from './';

describe('length', () => {
  it('returns 0 if undefined is provided as parameter', () => {
    const tested = length(undefined);
    const expected = 0;
    assert.equal(tested, expected, 'Should return 3');
  });
  it('works with strings', () => {
    const tested = length('abc');
    const expected = 3;
    assert.equal(tested, expected, 'Should return 3');
  });
  it('works with array of 3 strings', () => {
    const tested = length(['a', 'b', 'c']);
    const expected = 3;
    assert.equal(tested, expected, 'Should return 3');
  });
  it('works with big array', () => {
    const arr = Array.from({ length: 9999 }).map((v, k) => k + 1);
    const tested = length(arr);
    const expected = 9999;
    assert.equal(tested, expected, 'Should return 9999');
  });
});
