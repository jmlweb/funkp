/**
 * Ensures only one parameter is provided to fn
 *
 * @func
 * @param {Function} fn
 * @return {Function}
 * @example
 * const fn = (...x) => x.length;
 * unary(fn)(1, 2, 3); // 1
 */
const unary = fn => x => fn(x);

export default unary;
