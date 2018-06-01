/**
 * Breaks down a function with many parameters into a series of unary functions
 *
 * @func
 * @param {Function} fn
 * @return {Function}
 * @example
 * const add = (x, y, z) => x + y + z;
 * const curriedAdd = curry(add);
 * curriedAdd(1)(2)(3); // 6
 */

const curry = fn => {
  const nest = (arity, args) => (...xs) =>
    (arity - xs.length <= 0 ? fn(...args, ...xs) : nest(arity - xs.length, [...args, ...xs]));
  return nest(fn.length, []);
};

export default curry;
