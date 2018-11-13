import reduce from '../reduce';

/**
 * Connects functions passed by parameter where data flows from left to right
 *
 * @param {Array} fns - Array of functions passed as arguments
 * @returns {*} - The result of the operation
 *
 * @example
 * const addTwo = x => x + 2;
 * const multiplyByFour = x => 4 * x;
 * const getFinalPrice = pipe(addTwo, multiplyByFour)
 * getFinalPrice(10); // multiplyByFour(addTwo(10)) // 48
 */
const pipe = (...fns) => arg => reduce(fns, (x, f) => f(x), arg);

export default pipe;
