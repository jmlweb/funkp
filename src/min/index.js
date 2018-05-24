import reduce from '../reduce';

/**
 * Return the min value in array
 *
 * @func
 * @param {Array} array
 * @return {*}
 * @example
 * min([1,2,3]); // 1
 */
const min = array => reduce(array, (acc, curr) => (curr < acc ? curr : acc), Infinity);

export default min;
