import isDef from '../isDef';
import isArray from '../isArray';

/**
 * Flatten nested arrays into an unidimensional ones
 *
 * @func
 * @param {Array} - Array to flatten
 * @return {Array}
 *
 * @example
 * flatten([['a'], ['b'], ['c'], ['d']]); // ['a', 'b', 'c', 'd']
 */
const flatten = ([x, ...xs]) =>
  isDef(x) ? (isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]) : [];

export default flatten;
