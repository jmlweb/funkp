import assert from 'assert';

import when from './';

describe('when', () => {
  const testedFunc = (x, y) => x > 0 && y > 0;
  const sum = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  it('works', () => {
    assert.equal(when(testedFunc, sum)(2, 1), 3);
    assert.equal(when(testedFunc, subtract)(2, 1), 1);
    assert.equal(when(testedFunc, subtract)(0, 1), undefined);
  });
});
