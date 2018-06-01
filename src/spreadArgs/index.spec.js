import assert from 'assert';
import spreadArgs from './';

describe('spreadArgs', () => {
  const add = (x, y) => x + y;
  it('works', () => {
    const tested = spreadArgs(add)([1, 2]);
    const expected = 3;
    assert.equal(tested, expected, 'Should return 3');
  });
  it('calls identity if no function is provided', () => {
    const tested = spreadArgs()([1, 2]);
    const expected = 1;
    assert.equal(tested, expected, 'Should return 1');
  });
});
