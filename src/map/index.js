import identity from '../identity';

/**
 * Returns a new array applying the function to each item in the array
 *
 * @func
 * @param {Array} x
 * @param {Function} fn
 * @returns {Array}
 *
 * @example
 * map([1,2,3], v => v * 2); //[2,4,6]
 */
const map = (arr, fn = identity) => arr.map(fn);

export default map;
