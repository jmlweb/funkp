import isDef from '../isDef';

/**
 * Return a reversed copy of the array
 * @param {array}
 * @returns {array} 
 */
const reverse = ([x, ...xs]) => isDef(x) ? [...reverse(xs), x] : [];

export default reverse;