/**
 * Returns a new array applying the function to each item in the array
 *
 * @func
 * @param {Array} x
 * @param {Function} fn
 * @return {Array}
 *
 * @example
 * map([1,2,3], v => v * 2); //[2,4,6]
 */
const map = (x, fn) => x.map(fn);

export default map;
