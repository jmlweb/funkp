/**
 * Return all but the first item in an array
 *
 * @func
 * @param {Array}
 * @returns {Array}
 *
 * @example
 * const array = ['a', 'b', 'c'];
 * tail(array); // ['b', 'c'];
 */
const tail = ([, ...x]) => x;

export default tail;
