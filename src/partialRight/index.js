/**
 * Partially apply a function, merging any number of arguments from right to left
 *
 * @func
 * @param {Function} fn - The function to be applied
 * @param {Array} x - the list of elements
 * @return {Function}
 * @example
 * const division = (x, y) => x / y;
 * const division3 = partialRight(division, 3);
 * division3(6); // 2
 */
const partialRight = (fn, ...x) => (...xs) => fn(...xs, ...x);

export default partialRight;
