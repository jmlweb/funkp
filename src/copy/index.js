/**
 * Return an exact copy of the array
 *
 * @func
 * @param {Array} arr - Source array
 * @returns {Array} - Copy of the array
 *
 * @example
 * copy(['a', 'b', 'c']) // ['a', 'b', 'c']
 */
const copy = arr => [...arr];

export default copy;
