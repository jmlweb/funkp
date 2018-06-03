import assert from 'assert';
import partialProps from './';

describe('partialProps', () => {
  const keysToString = obj => Object.keys(obj).join('');
  const partialToString = partialProps(keysToString, { c: 3, d: 4 });
  it('returns a function', () => {
    const tested = partialToString instanceof Function;
    const expected = true;
    assert.equal(tested, expected, 'Should be a instance of function');
  });
  it('works', () => {
    const tested = partialToString({ a: 1, b: 2 });
    const expected = 'cdab';
    assert.equal(tested, expected, 'Should return cdab');
  });
  it('works 2', () => {
    const tested = partialProps(partialToString, { b: 2 })({ a: 1 });
    const expected = 'cdba';
    assert.equal(tested, expected, 'Should return cdba');
  });
});
