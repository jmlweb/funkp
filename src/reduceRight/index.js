import isArray from '../isArray';

/**
 * Applies reduce from right to left
 *
 * @func
 * @param {Array} arr
 * @param {Function} fn
 * @param {*} initial
 * @example
 * reduceRight([1, 2, 3], (acc, curr) => [...acc, curr], []); // [3, 2, 1]
 */
const reduceRight = (arr, fn, initial) => (isArray(arr) ? arr.reduceRight(fn, initial) : initial);

export default reduceRight;
