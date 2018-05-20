import isDef from '../isDef';

/**
 * Return an exact copy of the array
 * 
 * copy(['a', 'b', 'c']) // ['a', 'b', 'c']
 * @param {array} x
 * @returns {array}
 */
const copy = x => isDef(x) ? [...x] : [];

export default copy;