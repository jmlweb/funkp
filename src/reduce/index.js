import isArray from '../isArray';

/**
 * Applies a function against an accumulator and each element in the array (from left to right)
 * to reduce it to a single value
 *
 * @func
 * @param {Array} arr
 * @param {Function} fn
 * @param {*} initial
 * @example
 * reduce([1, 2, 3], (acc, curr) => acc + curr, 0); // 6
 */
const reduce = (arr, fn, initial) => (isArray(arr) ? arr.reduce(fn, initial) : initial);

export default reduce;
