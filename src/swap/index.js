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
 * swap(['a', 'b', 'c'], 2, 0); // ['c', 'b', 'a']
 */
const swap = (arr, i, j) => arr.map((v, k) => (k === i ? arr[j] : k === j ? arr[i] : v));

export default swap;
