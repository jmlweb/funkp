import assert from 'assert';
import partial from './';

describe('partial', () => {
  const add = (x, y) => x + y;
  const addTo3 = partial(add, 3);
  it('returns a function', () => {
    const tested = addTo3 instanceof Function;
    const expected = true;
    assert.equal(tested, expected, 'Should be a instance of function');
  });
  it('works', () => {
    const tested = addTo3(2);
    const expected = 5;
    assert.equal(tested, expected, 'Should return 5');
  });
  it('works with nested partials', () => {
    const operation = (fn, x, y) => fn(x, y);
    const addOperation = partial(operation, add);
    const add3 = partial(addOperation, 3);
    const tested = add3(2);
    const expected = 5;
    assert.equal(tested, expected, 'Should return 5');
  });
});
