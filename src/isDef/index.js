/**
 * Check if argument supplied is defined
 * 
 * @func
 * @param {*} x => value to be checked
 * @return {Boolean}
 * 
 * @example
 * const a = { foo: 'bar' }
 * isDef(a.foo); //true
 * isDef(a.bar); //false
 */
const isDef = x => typeof x !== 'undefined';

export default isDef;