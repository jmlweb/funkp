/**
 * Returns the parameter as the result of a function
 *
 * @func
 * @param {*} x
 * @return {Function}
 * @example
 * const fn = constant(1);
 * fn(); // 1
 */
const constant = x => () => x;

export default constant;
