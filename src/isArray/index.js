/**
 * Check if the item provided is an array
 *
 * @func
 * @param {*} x
 * @returns {Boolean}
 *
 * @example
 * isArray([1]); // true
 * isArray(1); // false
 */
const isArray = x => Array.isArray(x);

export default isArray;
