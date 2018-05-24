/**
 * Partially apply a function, merging any number of arguments
 *
 * @func
 * @param {Function} fn - The function to be applied
 * @param {Array} x - the list of elements
 * @return {Function}
 * @example
 * const add = (x, y) => x + y;
 * const addTo3 = partial(add, 3);
 * addTo3(2); // 5
 */
const partial = (fn, ...x) => (...xs) => fn(...x, ...xs);

export default partial;
