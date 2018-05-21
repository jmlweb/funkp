import isArray from '../isArray';

const flatten = (x, ...xs) => isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, flatten(xs)];

export default flatten;