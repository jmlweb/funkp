/**
 * Calls a function with all arguments passed as an array
 *
 * @func
 * @param {Function} fn
 * @return {Function}
 * @example
 * const add = x => reduce(x, (acc, curr) => acc + curr, 0);
 * spreadArg(add)(1, 2, 3); // 6
 */
const spreadArg = fn => (...x) => fn(x);

export default spreadArg;
