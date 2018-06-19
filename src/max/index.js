import reduce from '../reduce';

/**
 * Return the max value in array
 *
 * @func
 * @param {Array} array
 * @returns {*}
 *
 * @example
 * max([1,2,3]); // 3
 */
const max = array => reduce(array, (acc, curr) => (curr > acc ? curr : acc), -Infinity);

export default max;
