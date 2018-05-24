import reduceRight from '../reduceRight';

/**
 * Connects functions passed by parameter where data flows from right to left
 * @param {Array} fn
 * @return {*}
 * @example
 * const addTwo = x => x + 2;
 * const multiplyByFour = x => 4 * x;
 * const getFinalPrice = compose(addTwo, multiplyByFour)
 * getFinalPrice(10); // addTwo(multiplyByFour(10)) // 42
 */
const compose = (...fn) => x => reduceRight(fn, (acc, curr) => curr(acc), x);

export default compose;
