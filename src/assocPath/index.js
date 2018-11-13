// TODO: fix this
const assocPath = ([key, ...keys], val, obj) =>
  !keys.length ? { ...obj, [key]: val } : assocPath(keys, { ...obj, [key]: val }, obj[key] || {});

export default assocPath;
