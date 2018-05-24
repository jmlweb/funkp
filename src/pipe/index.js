import reduce from '../reduce';

/**
 * Connects functions passed by parameter where data flows from left to right
 * @param {Array} fn
 * @return {*}
 * @example
 * const addTwo = x => x + 2;
 * const multiplyByFour = x => 4 * x;
 * const getFinalPrice = pipe(addTwo, multiplyByFour)
 * getFinalPrice(10); // multiplyByFour(addTwo(10)) // 48
 */
const pipe = (...fn) => x => reduce(fn, (acc, curr) => curr(acc), x);

export default pipe;
