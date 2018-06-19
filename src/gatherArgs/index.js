import identity from '../identity';

/**
 * Calls a function with all arguments passed as an array
 *
 * @func
 * @param {Function} fn
 * @returns {Function}
 *
 * @example
 * const add = x => reduce(x, (acc, curr) => acc + curr, 0);
 * gatherArgs(add)(1, 2, 3); // 6
 */
const gatherArgs = (fn = identity) => (...x) => fn(x);

export default gatherArgs;
