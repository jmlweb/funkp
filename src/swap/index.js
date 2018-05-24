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
const swap = (x, i, j) => {
  const changes = {
    [i]: x[j],
    [j]: x[i],
  };
  return map(x, (v, k) => changes[k] || v);
};

export default swap;
