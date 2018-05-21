import isArray from '../isArray';

/**
 * Return an exact copy of the array
 * 
 * @func
 * @param {Array} x - source array
 * @return {Array}
 * 
 * @example
 * copy(['a', 'b', 'c']) // ['a', 'b', 'c']
 */
const copy = x => isArray(x) ? [...x] : [];

export default copy;