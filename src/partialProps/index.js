/**
 * Partially apply a function, merging the objects provided as arguments
 *
 * @func
 * @param {*} fn - The function to be applied
 * @param {*} presetArgsObj - the arguments object
 * @return {Function}
 * @example
 * const keysToString = obj => Object.keys(obj).join('');
 * const partialToString = partialProps(keysToString, { c: 3, d: 4 });
 * partialToString({ a: 1, b: 2 }); // 'cdba'
 */
const partialProps = (fn, presetArgsObj) => laterArgsObj =>
  fn({ ...presetArgsObj, ...laterArgsObj });

export default partialProps;
