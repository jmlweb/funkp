import assert from 'assert';
import partialRight from './';

describe('partialRight', () => {
  const division = (x, y) => x / y;
  const divide3 = partialRight(division, 3);
  it('returns a function', () => {
    const tested = divide3 instanceof Function;
    const expected = true;
    assert.equal(tested, expected, 'Should be a instance of function');
  });
  it('works', () => {
    const tested = divide3(6);
    const expected = 2;
    assert.equal(tested, expected, 'Should return 2');
  });
  it('works with nested partials', () => {
    const operation = (x, y, fn) => fn(x, y);
    const divisionOperation = partialRight(operation, division);
    const division3 = partialRight(divisionOperation, 3);
    const tested = division3(6);
    const expected = 2;
    assert.equal(tested, expected, 'Should return 2');
  });
});
