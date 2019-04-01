import { isArrayLike } from './utils';

/** @function map
 * Iterates over an array-like, applying a callback to each item.
 * @param {arrayLike} arrayLike - an array-like object
 * @param {function} callback - a callback
 * @returns {arrayLike}
 */

const map = function(arrayLike, callback) {
  if (!isArrayLike(arrayLike)) {
    throw new Error('Should be able to be traversed.');
  }

  const { length } = arrayLike;

  for (let i = 0; i < length; i++) {
    callback(arrayLike[i], i);
  }
};

export default map;
