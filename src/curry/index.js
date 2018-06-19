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

const curry = fn => {
  const nest = (arity, prevArgs) => (...nextArgs) =>
    (arity - nextArgs.length <= 0
      ? fn(...prevArgs, ...nextArgs)
      : nest(arity - nextArgs.length, [...prevArgs, ...nextArgs]));
  return nest(fn.length, []);
};

export default curry;
