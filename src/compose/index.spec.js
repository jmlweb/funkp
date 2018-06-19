import assert from 'assert';
import map from '../map';
import partial from '../partial';
import pluck from '../pluck';
import compose from './';

describe('compose', () => {
  it('works', () => {
    const getA = partial(pluck, 'a');
    const addTwo = x => x + 2;
    const multiplyByFour = x => 4 * x;
    const getFinalPrice = compose(
      addTwo,
      multiplyByFour,
      getA,
    );

    const products = [{ a: 10 }, { a: 5 }, { a: 1 }];

    const tested = map(products, getFinalPrice);
    const expected = [42, 22, 6];
    assert.deepStrictEqual(tested, expected, 'Should return [42, 22, 6]');
  });
});
