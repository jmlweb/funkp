/**
 * Partially apply a function, merging any number of arguments
 *
 * @func
 * @param {Function} fn - The function to be applied
 * @param {Array} prevArgs - the list of elements
 * @returns {Function}
 *
 * @example
 * const add = (x, y) => x + y;
 * const addTo3 = partial(add, 3);
 * addTo3(2); // 5
 */
const partial = (fn, ...prevArgs) => (...nextArgs) => fn(...prevArgs, ...nextArgs);

export default partial;
