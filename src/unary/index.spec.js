import assert from 'assert';

import unary from './';

describe('unary', () => {
  const fn = (...x) => x.length;
  it('works when passing 1 argument', () => {
    const tested = unary(fn)(1);
    const expected = 1;
    assert.equal(tested, expected, 'Should return 1');
  });
  it('works when passing 3 arguments', () => {
    const tested = unary(fn)(1, 2, 3);
    const expected = 1;
    assert.equal(tested, expected, 'Should return 1');
  });
});
