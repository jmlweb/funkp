import assert from 'assert';

import path from '.';

describe('path', () => {
  it('works', () => {
    const tested = path(['a', 'b'], { a: { b: 2 } });
    const expected = 2;
    assert.equal(tested, expected, 'Should return 2');
  });

  it('works without happy path', () => {
    const tested = path(['a', 'b'], { c: { b: 2 } });
    const expected = undefined;
    assert.equal(tested, expected, 'Should return `undefined`');
  });
});
