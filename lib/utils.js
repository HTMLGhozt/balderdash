/** @function isPrimitive
 * Checks if a value is a primitive value type.
 * @param {any} value - value to check if it's a primitive value type
 * @return {boolean}
 */

export const isPrimitive = value => {
  const type = typeof value;

  if (type === 'object') {
    return value === null;
  }
  return type !== 'function';
};

/** @function isArrayLike
 * Checks if value is an array-like.
 * @param {any} value - value to check likeness to array
 * @return {boolean}
 */

export const isArrayLike = value => {
  if (
    typeof value === 'string' ||
    Object.prototype.toString.call(value) === '[object Array]'
  ) {
    return true;
  }

  if (isPrimitive(value) || typeof value === 'function') {
    return false;
  }

  if ('length' in value && value.length >= 0) {
    return true;
  }

  return false;
};
