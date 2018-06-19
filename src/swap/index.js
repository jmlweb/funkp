import map from '../map';

/**
 * Swap between two positions in array
 *
 * @func
 * @param {Array} arr - array to be swapped
 * @param {Number} i - first position
 * @param {Number} j - second position
 * @returns {Array}
 *
 * @example
 * swap(['a', 'b', 'c'], 2, 0); //['c', 'b', 'a']
 */
const swap = (arr, i, j) => {
  const changes = {
    [i]: arr[j],
    [j]: arr[i],
  };
  return map(arr, (v, k) => changes[k] || v);
};

export default swap;
