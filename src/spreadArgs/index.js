/**
 * Calls a function with all arguments passed as an array
 *
 * @func
 * @param {Function} fn
 * @return {Function}
 * @example
 * const add = x => reduce(x, (acc, curr) => acc + curr, 0);
 * spreadArgs(add)(1, 2, 3); // 6
 */
const spreadArgs = fn => (...x) => fn(x);

export default spreadArgs;
