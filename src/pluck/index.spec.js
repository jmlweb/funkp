import assert from 'assert';

import pluck from './';
import partial from '../partial';
import map from '../map';

describe('pluck', () => {
  it('works', () => {
    const tested = pluck('a', { a: 10 });
    const expected = 10;
    assert.equal(tested, expected, 'Should return 10');
  });
  it('works combined', () => {
    const arr = [{ a: 10 }, { a: 20 }, { a: 30 }];
    const partialPluck = partial(pluck, 'a');
    const tested = map(arr, partialPluck);
    const expected = [10, 20, 30];
    assert.deepStrictEqual(tested, expected, 'Should return [10, 20, 30]');
  });
});
