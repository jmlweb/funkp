import reduce from '../reduce';

/**
 * Return the min value in array
 *
 * @func
 * @param {Array} arr
 * @returns {*}
 *
 * @example
 * min([1,2,3]); // 1
 */
const min = arr => reduce(arr, (acc, curr) => (curr < acc ? curr : acc), Infinity);

export default min;
