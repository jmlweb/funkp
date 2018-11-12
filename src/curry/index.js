/**
 * Breaks down a function with many parameters into a series of unary functions
 *
 * @func
 * @param {Function} fn
 * @returns {Function}
 * @example
 *
 * const add = (x, y, z) => x + y + z;
 * const curriedAdd = curry(add);
 * curriedAdd(1)(2)(3); // 6
 */
const curry = (f, arity = f.length, ...args) =>
  arity <= args.length ? f(...args) : (...argz) => curry(f, arity, ...args, ...argz);

export default curry;
