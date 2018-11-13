import assert from 'assert';

import assocPath from '.';

describe('path', () => {
  it('works', () => {
    const tested = assocPath(['a', 'b', 'c'], 42, { a: { b: { c: 0 } } });
    const expected = { a: { b: { c: 42 } } };
    assert.deepStrictEqual(tested, expected, 'Should return `{a: {b: {c: 42}}}`');
  });

  it('should preserve all other values not in path', () => {
    const tested = assocPath(['a', 'b', 'c'], 42, { a: { b: { c: 0 }, d: 10 } });
    const expected = { a: { b: { c: 42 }, d: 10 } };
    assert.deepStrictEqual(tested, expected, 'Should return `{a: {b: {c: 42}, d:10}}`');
  });

  it('should override any missing or non-object keys in path', () => {
    const tested = assocPath(['a', 'b', 'c'], 42, { a: 5 });
    const expected = { a: { b: { c: 42 } } };
    assert.deepStrictEqual(tested, expected, 'Should return `{a: {b: {c: 42}}}`');
  });
});
