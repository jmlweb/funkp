/**
 * Return all but the first item in an array
 * 
 * const array = ['a', 'b', 'c'];
 * tail(array); // ['b', 'c'];
 * @param {*} param0 
 */
const tail = ([,...x]) => x;

export default tail;