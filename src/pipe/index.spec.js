import assert from 'assert';
import map from '../map';
import partial from '../partial';
import pluck from '../pluck';
import pipe from './';

describe('pipe', () => {
  it('works', () => {
    const getA = partial(pluck, 'a');
    const addTwo = x => x + 2;
    const multiplyByFour = x => 4 * x;
    const getFinalPrice = pipe(getA, addTwo, multiplyByFour);

    const products = [{ a: 10 }, { a: 5 }, { a: 1 }];

    const tested = map(products, getFinalPrice);
    const expected = [48, 28, 12];
    assert.deepStrictEqual(tested, expected, 'Should return [48, 28, 12]');
  });
});
