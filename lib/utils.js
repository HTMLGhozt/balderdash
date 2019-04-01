/** @function isPrimitive
 *
 */

export const isPrimitive = val => {
  const type = typeof val;

  if (type === 'object') {
    return val === null;
  }
  return type !== 'function';
};

/** @function isArrayLike
 * Checks if value is an array-like.
 * @param {arrayLike} - an array like collection.
 * @return {boolean}
 */

export const isArrayLike = arrayLike => {
  if (typeof arrayLike === 'string') {
    return true;
  }

  if (Object.prototype.toString.call(arrayLike) === '[object Array]') {
    return true;
  }

  if (isPrimitive(arrayLike)) {
    return false;
  }

  if ('length' in arrayLike && arrayLike.length >= 0) {
    return true;
  }
};
