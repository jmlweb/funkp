/**
 * Applies fn over the args when the predicate is valid over the same args
 * If predicate is not valid, it returns undefined
 *
 * @func
 * @param {function} predicate
 * @param {function} fn
 * @returns {function}
 *
 * @example
 * const testedFunc = (x, y) => x > 0 && y > 0;
 * const sum = (x, y) => x + y;
 * const subtract = (x, y) => x - y;
 * when(testedFunc, sum)(2, 1); // 3
 * when(testedFunc, subtract)(2, 1); // 1
 * when(testedFunc, subtract)(0, 1); // undefined
 */
const when = (predicate, fn) => (...args) => (predicate(...args) ? fn(...args) : undefined);

export default when;
