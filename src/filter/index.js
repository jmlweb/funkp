import isArray from '../isArray';

/**
 * Return a filtered copy of the array
 *
 * @func
 * @param {Array} arr
 * @param {Function} fn - filter function
 * @example
 * filter([1, 2, 3], v => v % 2 === 0) // [2]
 */
const filter = (arr, fn) => (isArray(arr) ? arr.filter(fn) : []);

export default filter;
