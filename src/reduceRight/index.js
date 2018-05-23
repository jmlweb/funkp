import isArray from '../isArray';
import reduce from '../reduce';
import reverse from '../reverse';

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
const reduceRight = (arr, fn, initial) =>
  (isArray(arr) ? reduce(reverse(arr), fn, initial) : initial);

export default reduceRight;
