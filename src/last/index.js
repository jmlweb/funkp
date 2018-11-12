import { isArray } from 'util';

/**
 * Extract the last n items from array supplied
 *
 * @param {Array} x - The array to extract the items of
 * @param {Number} n - Number of items
 * @returns {Array}
 *
 * @example
 * last(['a', 'b', 'c'], 2); // ['b', 'c']
 */
const last = (xs, n = 1) => (isArray(xs) ? xs.slice(-n) : []);

export default last;
