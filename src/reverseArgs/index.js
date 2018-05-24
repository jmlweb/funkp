import reverse from '../reverse';

/**
 * Calls fn reversing the arguments provided
 *
 * @func
 * @param {Function} fn
 * @return {Function}
 * @example
 * const concat = (...x) => reduce(x, (acc, curr) => `${acc}${curr}`, '');
 * const reverseConcat = reverseArgs(concat);
 * reverseConcat('a', 'b', 'c'); // 'cba'
 */
const reverseArgs = fn => (...x) => fn(...reverse(x));

export default reverseArgs;
