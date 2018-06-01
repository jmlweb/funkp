import assert from 'assert';

import curry from './';

describe('curry', () => {
  const add = (x, y, z) => x + y + z;
  const fn = curry(add);
  it('works', () => {
    const tested = fn(1)(2)(3);
    const expected = 6;
    assert.equal(tested, expected, 'Should return 6');
  });
  it('works 2', () => {
    const tested = fn(1, 2, 3);
    const expected = 6;
    assert.equal(tested, expected, 'Should return 6');
  });
  it('works 3', () => {
    const tested = fn(1)(2, 3);
    const expected = 6;
    assert.equal(tested, expected, 'Should return 6');
  });
  it('works 4', () => {
    const tested = fn(1, 2)(3);
    const expected = 6;
    assert.equal(tested, expected, 'Should return 6');
  });
});
