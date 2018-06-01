import assert from 'assert';

import reduce from '../reduce';
import reverseArgs from './';

describe('reverseArgs', () => {
  it('returns empty array when no array is provided as parameter', () => {
    const concat = (...x) => reduce(x, (acc, curr) => `${acc}${curr}`, '');
    const reverseConcat = reverseArgs(concat);
    const tested = reverseConcat('a', 'b', 'c');
    const expected = 'cba';
    assert.equal(tested, expected, 'Should return cba');
  });
  it('calls identity if no function is provided', () => {
    const tested = reverseArgs()('a', 'b', 'c');
    const expected = 'c';
    assert.equal(tested, expected, 'Should return c');
  });
});
