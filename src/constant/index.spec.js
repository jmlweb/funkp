import assert from 'assert';

import constant from './';

describe('constant', () => {
  it('works when passing 1 argument', () => {
    const fn = constant(1);
    const tested = fn();
    const expected = 1;
    assert.equal(tested, expected, 'Should return 1');
  });
});
