import assert from 'assert';

import isUndef from './';

describe('isUndef', () => {
  it('works with undefined', () => {
    const a = {};
    const tested = isUndef(a.a);
    const expected = true;
    assert.equal(tested, expected, 'Should return true');
  });
  it('works with undefined', () => {
    const tested = isUndef('a');
    const expected = false;
    assert.equal(tested, expected, 'Should return false');
  });
});
