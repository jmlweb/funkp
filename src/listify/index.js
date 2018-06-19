import isArray from '../isArray';

/**
 * Forces the argument to be an array
 *
 * @func
 * @param {*} x
 * @returns {Array}
 * @example
 * listify(['a']); // ['a']
 * listify('a'); // ['a']
 */
const listify = arr => (isArray(arr) ? arr : [arr]);

export default listify;
