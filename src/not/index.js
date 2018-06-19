/**
 * Return true if the result of applying the predicate over the args is false
 *
 * @func
 * @param {function} predicate
 * @returns {function}
 *
 * @example
 * const testedFunc = (x, y, z) => x > 0 && y > 0 && z > 0;
 * not(testedFunc)(2, 1, 0)  // true
 * not(testedFunc)(3, 2, 1)  // false
 */
const not = predicate => (...args) => !predicate(...args);

export default not;
