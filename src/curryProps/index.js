/**
 * Breaks down a function with many parameters into a series of unary functions, without order
 *
 * @func
 * @param {Function} fn
 * @param {Number} arity
 * @return {Function}
 * @example
 * const operation = ({ a, b, c }) => (a - b) / c;
 * const curriedPropsOperation = curryProps(operation, 3);
 * curriedPropsOperation({ a: 8 })({ b: 2 })({ c: 3 }); // 2
 * curriedPropsOperation({ c: 3 })({ a: 8 })({ b: 2 }); // 2
 */
const curryProps = (fn, arity = 1) => {
  const nextCurried = prevArgsObj => (nextArgsObj = {}) => {
    const [key] = Object.keys(nextArgsObj);
    const allArgsObj = { ...prevArgsObj, [key]: nextArgsObj[key] };
    if (Object.keys(allArgsObj).length >= arity) {
      return fn(allArgsObj);
    }
    return nextCurried(allArgsObj);
  };
  return nextCurried({});
};

export default curryProps;
