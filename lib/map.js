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
  // There's some argument about what should actually be returned.
  // See: https://github.com/HTMLGhozt/balderdash/issues/3
  const returnArray = [];
  const { length } = arrayLike;

  for (let i = 0; i < length; i++) {
    returnArray.push(callback(arrayLike[i], i));
  }
  return returnArray;
};

export default map;
