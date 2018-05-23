import assert from 'assert';

import isDef from './';

describe('isDef', () => {
  it('works with string', () => {
    const tested = isDef('a');
    const expected = true;
    assert.equal(tested, expected, 'Should return true');
  });
  it('works with number', () => {
    const tested = isDef(1);
    const expected = true;
    assert.equal(tested, expected, 'Should return true');
  });
  it('works with array', () => {
    const tested = isDef(['a']);
    const expected = true;
    assert.equal(tested, expected, 'Should return true');
  });
  it('works with object', () => {
    const tested = isDef({ a: 'a' });
    const expected = true;
    assert.equal(tested, expected, 'Should return true');
  });
  it('returns false for undefined', () => {
    const a = {};
    const tested = isDef(a.a);
    const expected = false;
    assert.equal(tested, expected, 'Should return false');
  });
});
