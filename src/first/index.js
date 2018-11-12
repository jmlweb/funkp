import isArray from '../isArray';

/**
 * Extract the first n items from array supplied
 *
 * @func
 * @param {Array} - Array to extract the items of
 * @param {Number} n - Number of items to extract
 * @returns {Array}
 *
 * @example
 * first(['a', 'b', 'c'], 2); // 2
 */
const first = (xs, n = 1) => (isArray(xs) ? xs.slice(0, n) : []);

export default first;
