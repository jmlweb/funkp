import filter from '../filter';
import reject from '../reject';

/**
 * Returns an array with two arrays inside:
 * - First one includes items which pass the filter function
 * - Second one includes items which rejects the filter function
 *
 * @func
 * @param {Array} arr
 * @param {Function} fn
 * @example
 * partition([1,2,3], v => v % 2 === 0); // [[2], [1, 3]]
 */
const partition = (arr, fn) => [filter(arr, fn), reject(arr, fn)];

export default partition;
