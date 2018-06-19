import assert from 'assert';

import not from './';

describe('not', () => {
  const testedFunc = (x, y, z) => x > 0 && y > 0 && z > 0;
  it('works', () => {
    assert.equal(not(testedFunc)(2, 1, 0), true);
    assert.equal(not(testedFunc)(3, 2, 1), false);
  });
});
