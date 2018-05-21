import isArray from '../isArray';

/**
 * Extract the first n items from array supplied
 * 
 * @func
 * @param {Array} - Array to extract the items of
 * @param {Number} n - Number of items to extract
 * @return {Array}
 * 
 * @example
 * first(['a', 'b', 'c'], 2); // 2
 */
const first = ([x, ...xs], n = 1) => (isArray(xs) && n ? [x, ...first(xs, n - 1)] : []);

export default first;
