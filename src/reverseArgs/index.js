import identity from '../identity';
import reverse from '../reverse';

/**
 * Calls fn reversing the arguments provided
 *
 * @func
 * @param {Function} fn
 * @returns {Function}
 * @example
 * const concat = (...x) => reduce(x, (acc, curr) => `${acc}${curr}`, '');
 * const reverseConcat = reverseArgs(concat);
 * reverseConcat('a', 'b', 'c'); // 'cba'
 */
const reverseArgs = (fn = identity) => (...args) => fn(...reverse(args));

export default reverseArgs;
