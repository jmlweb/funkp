import isArray from '../isArray';

/**
 * Forces the argument to be an array
 *
 * @func
 * @param {*} x
 * @return {Array}
 * @example
 * arr(['a']); // ['a']
 * arr('a'); // ['a']
 */
const arr = x => (isArray(x) ? x : [x]);

export default arr;
