/**
 * Partially apply a function, merging any number of arguments from right to left
 *
 * @func
 * @param {Function} fn - The function to be applied
 * @param {Array} prevArgs - the list of elements
 * @returns {Function}
 *
 * @example
 * const division = (x, y) => x / y;
 * const division3 = partialRight(division, 3);
 * division3(6); // 2
 */
const partialRight = (fn, ...prevArgs) => (...nextArgs) => fn(...nextArgs, ...prevArgs);

export default partialRight;
