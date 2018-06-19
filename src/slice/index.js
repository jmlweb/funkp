/**
 * Returns a portion of the array, defined by the arguments passed
 *
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 * @returns {Array}
 *
 * @example
 * slice(['a', 'b', 'c', 'd'], 1, 3); // ['b', 'c']
 */
const slice = (arr, start, end) => arr.slice(start, end);

export default slice;
