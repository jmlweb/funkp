import map from '../map';

/**
 * Swap between two positions in array
 *
 * @func
 * @param {Array} x - array to be swapped
 * @param {Number} i - first position
 * @param {Number} j - second position
 * @return {Array}
 *
 * @example
 * swap(['a', 'b', 'c'], 2, 0); //['c', 'b', 'a']
 */
const swap = (x, i, j) =>
  map(x, (v, k) => {
    if (k === i) {
      return x[j];
    }
    if (k === j) {
      return x[i];
    }
    return v;
  });

export default swap;
