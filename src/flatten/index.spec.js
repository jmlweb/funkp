import assert from 'assert';

import flatten from './';

describe('flatten', () => {
  it('works with units', () => {
    const tested = flatten([['a'], ['b'], ['c'], ['d']]);
    const expected = ['a', 'b', 'c', 'd'];
    assert.deepStrictEqual(tested, expected, 'Should return flattened array');
  });
  it('works with groups', () => {
    const tested = flatten([['a', 'b'], ['c', 'd']]);
    const expected = ['a', 'b', 'c', 'd'];
    assert.deepStrictEqual(tested, expected, 'Should return flattened array');
  });
  it('works with nested', () => {
    const tested = flatten([[['a'], 'b'], ['c', ['d']]]);
    const expected = ['a', 'b', 'c', 'd'];
    assert.deepStrictEqual(tested, expected, 'Should return flattened array');
  });
});
