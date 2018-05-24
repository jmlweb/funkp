import assert from 'assert';

import arr from './';

describe('arr', () => {
  it('works with array', () => {
    const tested = arr(['a', 'b', 'c']);
    const expected = ['a', 'b', 'c'];
    assert.deepStrictEqual(tested, expected, 'Should return the array');
  });
  it('works without array', () => {
    const tested = arr('a');
    const expected = ['a'];
    assert.deepStrictEqual(tested, expected, 'Should return [a]');
  });
});
