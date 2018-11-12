import not from '../not';
import isDef from '../isDef';

/**
 * Check if argument supplied is not defined
 *
 * @func
 * @param {*} x - Value to be checked
 * @returns {Boolean}
 *
 * @example
 * const a = { foo: 'bar' }
 * isDef(a.foo); //false
 * isDef(a.bar); //true
 */
const isUndef = not(isDef);

export default isUndef;
