import assert from 'assert';
import curryProps from './';

describe('curryProps', () => {
  const operation = ({ a, b, c }) => (a - b) / c;
  const curriedPropsOperation = curryProps(operation, 3);
  it('returns a function', () => {
    const tested = curriedPropsOperation instanceof Function;
    const expected = true;
    assert.equal(tested, expected, 'Should be a instance of function');
  });
  it('works', () => {
    const tested = curriedPropsOperation({ a: 8 })({ b: 2 })({ c: 3 });
    const expected = 2;
    assert.equal(tested, expected, 'Should return 2');
  });
  it('works 2', () => {
    const tested = curriedPropsOperation({ c: 3 })({ a: 8 })({ b: 2 });
    const expected = 2;
    assert.equal(tested, expected, 'Should return 2');
  });
});
