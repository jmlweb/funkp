import copy from '../copy';
import isArray from '../isArray';

/**
 * Return a reversed copy of the array
 *
 * @func
 * @param {Array}
 * @return {Array}
 *
 * @example
 * reverse([1,2,3]); //[3,2,1]
 */
const reverse = x => (isArray(x) ? copy(x).reverse() : []);

export default reverse;
