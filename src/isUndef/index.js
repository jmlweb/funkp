import isDef from '../isDef';

/**
 * Check if argument supplied is not defined
 * @param {any} x 
 * @returns {boolean}
 */
const isUndef = x => !isDef(x);

export default isUndef;