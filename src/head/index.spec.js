import assert from 'assert';

import head from './';

describe('head', () => {
  it('works with array of 3 strings', () => {
    const tested = head(['a', 'b', 'c']);
    const expected = 'a';
    assert.deepStrictEqual(tested, expected, 'Should return first item in array');
  });
  it('works with big array', () => {
    const tested = head(['a', ...Array.from({ length: 9999 })]);
    const expected = 'a';
    assert.deepStrictEqual(tested, expected, 'Should return first item in array');
  });
});
