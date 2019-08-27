/**
 * Retrieve the value at a given path
 *
 * @func
 * @param {Array} path - Array with given path to extract
 * @param {*} obj - The object from which to extract the value
 * @returns {*} - The value of the given path
 *
 * @example
 * path(['a', 'b'], {a: {b: 2}}); // 2
 * path(['a', 'b'], {c: {b: 2}}); // undefined
 */
const path = ([key, ...keys], obj) => (!keys.length ? obj[key] : path(keys, obj[key] || {}));

export default path;
