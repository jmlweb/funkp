import reduceRight from '../reduceRight';

/**
 * Connects functions passed by parameter where data flows from right to left
 *
 * @param {Array} fns - Array of functions passed as arguments
 * @returns {*} - The result of the operation
 *
 * @example
 * const addTwo = x => x + 2;
 * const multiplyByFour = x => 4 * x;
 * const getFinalPrice = compose(addTwo, multiplyByFour)
 * getFinalPrice(10); // addTwo(multiplyByFour(10)) // 42
 */
const compose = (...fns) => arg => reduceRight(fns, (x, f) => f(x), arg);

export default compose;
