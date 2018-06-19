import assert from 'assert';

import listify from './';

describe('listify', () => {
  it('works with array', () => {
    const tested = listify(['a', 'b', 'c']);
    const expected = ['a', 'b', 'c'];
    assert.deepStrictEqual(tested, expected, 'Should return the array');
  });
  it('works without array', () => {
    const tested = listify('a');
    const expected = ['a'];
    assert.deepStrictEqual(tested, expected, 'Should return [a]');
  });
});
