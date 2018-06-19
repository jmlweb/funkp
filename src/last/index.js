import first from '../first';
import reverse from '../reverse';

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
const last = (x, n = 1) => reverse(first(reverse(x), n));

export default last;
