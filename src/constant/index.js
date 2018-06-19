/**
 * Returns the parameter as the result of a function
 *
 * @func
 * @param {*} x
 * @returns {Function}
 *
 * @example
 * const fn = constant(1);
 * fn(); // 1
 */
const constant = arg => () => arg;

export default constant;
