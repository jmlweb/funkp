import assert from 'assert';
import reduce from '../reduce';
import spreadArgs from './';

describe('spreadArgs', () => {
  const add = x => reduce(x, (acc, curr) => acc + curr, 0);
  it('works', () => {
    const tested = spreadArgs(add)(1, 2, 3);
    const expected = 6;
    assert.equal(tested, expected, 'Should return 6');
  });
});
