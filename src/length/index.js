import isDef from '../isDef';

/**
 * Return the length of the array
 * @param {*} x 
 * @return {number}
 */
const length = x => isDef(x) ? x.length : 0;

export default length;