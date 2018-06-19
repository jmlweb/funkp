import assert from 'assert';
import compose from '../compose';
import pipe from '../pipe';
import filter from '../filter';
import partialRight from '../partialRight';
import reduce from '../reduce';

describe('Composition', () => {
  const quote =
    'Home of the extraterrestrial brothers Dealers of funky music P.Funk, uncut funk, the bomb';

  const listToArray = list => Object.keys(list).map(v => list[v]);

  const reducer = (acc, curr) => (!acc.includes(curr) ? [...acc, curr] : acc);

  const unique1 = pipe(
    listToArray,
    partialRight(reduce, reducer, []),
  );

  const unique2 = compose(
    partialRight(reduce, reducer, []),
    listToArray,
  );

  function unique3(list) {
    const uniqList = [];
    Object.keys(list)
      .map(v => list[v])
      .forEach(v => {
        if (uniqList.indexOf(v) === -1) {
          uniqList.push(v);
        }
      });
    return uniqList;
  }

  const filterSpaces = v => /^[\w]+$/.test(v);

  const words1 = pipe(
    String,
    str => str.toLowerCase(),
    str => str.split(/\s|\b/),
    partialRight(filter, filterSpaces),
  );

  const words2 = compose(
    partialRight(filter, filterSpaces),
    str => str.split(/\s|\b/),
    str => str.toLowerCase(),
    String,
  );

  const words3 = str =>
    String(str)
      .toLowerCase()
      .split(/\s|\b/)
      .filter(filterSpaces);

  describe('order1', () => {
    const expected = [
      'home',
      'of',
      'the',
      'extraterrestrial',
      'brothers',
      'dealers',
      'funky',
      'music',
      'p',
      'funk',
      'uncut',
      'bomb',
    ];
    const result1 = pipe(
      words1,
      unique1,
    )(quote);
    const result2 = compose(
      unique2,
      words2,
    )(quote);
    const result3 = unique3(words3(quote));

    it('works with pipe version', () => {
      assert.deepStrictEqual(result1, expected);
    });
    it('works with compose version', () => {
      assert.deepStrictEqual(result2, expected);
    });
    it('works with nonFP version', () => {
      assert.deepStrictEqual(result3, expected);
    });
  });

  describe('order2', () => {
    const expected = [
      'h',
      'o',
      'm',
      'e',
      'f',
      't',
      'h',
      'x',
      'r',
      'a',
      's',
      'i',
      'l',
      'b',
      'd',
      'u',
      'n',
      'k',
      'y',
      'c',
      'p',
      'f',
    ];
    const result1 = pipe(
      unique1,
      words1,
    )(quote);
    const result2 = compose(
      words2,
      unique2,
    )(quote);
    const result3 = words3(unique3(quote));

    it('works with pipe version', () => {
      assert.deepStrictEqual(result1, expected);
    });
    it('works with compose version', () => {
      assert.deepStrictEqual(result2, expected);
    });
    it('works with nonFP version', () => {
      assert.deepStrictEqual(result3, expected);
    });
  });
});
