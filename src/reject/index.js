import filter from '../filter';
import identity from '../identity';

/**
 * Return a rejected copy of the array
 *
 * @func
 * @param {Array} arr
 * @param {Function} fn - filter function
 * @example
 * reject([1, 2, 3], v => v % 2 === 0) // [1, 3]
 */
const reject = (arr, fn = identity) => filter(arr, (v, k) => !fn(v, k));

export default reject;
