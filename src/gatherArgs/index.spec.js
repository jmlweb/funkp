import assert from 'assert';
import reduce from '../reduce';
import gatherArgs from './';

describe('gatherArgs', () => {
  const add = x => reduce(x, (acc, curr) => acc + curr, 0);
  it('works', () => {
    const tested = gatherArgs(add)(1, 2, 3);
    const expected = 6;
    assert.equal(tested, expected, 'Should return 6');
  });
  it('calls identity if no function is provided', () => {
    const tested = gatherArgs()(1, 2, 3);
    const expected = [1, 2, 3];
    assert.deepStrictEqual(tested, expected, 'Should return [1, 2, 3]');
  });
});
