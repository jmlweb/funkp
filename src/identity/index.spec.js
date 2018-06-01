import assert from 'assert';

import identity from './';

describe('identity', () => {
  it('works when passing 1 argument', () => {
    const x = 1;
    const tested = identity(x);
    const expected = x;
    assert.equal(tested, expected, 'Should return 1');
  });
  it('works combined with array.filter', () => {
    const tested = [undefined, 'a', null, 'b'].filter(identity);
    const expected = ['a', 'b'];
    assert.deepStrictEqual(tested, expected, 'Should return [a, b]');
  });
});
