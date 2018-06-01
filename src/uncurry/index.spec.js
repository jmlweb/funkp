import assert from 'assert';

import uncurry from './';

describe('uncurry', () => {
  const add = x => y => z => x + y + z;
  const fn = uncurry(add);
  it('works', () => {
    const tested = fn(1, 2, 3);
    const expected = 6;
    assert.equal(tested, expected, 'Should return 6');
  });
});
