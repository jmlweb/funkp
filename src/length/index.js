import isDef from '../isDef';

/**
 * Return the length of the array
 * 
 * @func
 * @param {*} x 
 * @return {Number}
 * 
 * @example
 * length([1,2,3]); //3
 */
const length = x => isDef(x) ? x.length : 0;

export default length;