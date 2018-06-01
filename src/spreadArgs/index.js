import identity from '../identity';

/**
 * Calls a function spreading the array received as multiple arguments
 *
 * @func
 * @param {Function} fn
 * @return {Function}
 * @example
 * const add = (x, y) => x + y;
 * spreadArgs(add)([1, 2]); // 3
 */
const spreadArgs = (fn = identity) => x => fn(...x);

export default spreadArgs;
