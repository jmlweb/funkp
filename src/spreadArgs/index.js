import identity from '../identity';

/**
 * Calls a function spreading the array received as multiple arguments
 *
 * @func
 * @param {Function} fn
 * @returns {Function}
 * @example
 * const add = (x, y) => x + y;
 * spreadArgs(add)([1, 2]); // 3
 */
const spreadArgs = (fn = identity) => arr => fn(...arr);

export default spreadArgs;
