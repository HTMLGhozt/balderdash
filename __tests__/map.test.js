import { test } from 'tap';
import td from 'testdouble';

import { color, leftPad } from './utils';
import map from '../lib/map';

td.config({ suppressErrors: true });

test('Define map as', ({ test, end }) => {
  test('should be a function', t => {
    t.assert(typeof map === 'function');
    t.end();
  });

  test('given an array-like it', ({ test, beforeEach, end }) => {
    let arrayLike;

    beforeEach(done => {
      arrayLike = { 0: 'foo', 1: 'bar', length: 2 };
      done();
    });

    test('should iterate invoking callback each time', async t => {
      const callback = td.function('callback');
      const captor = td.matchers.captor();
      map(arrayLike, callback);

      try {
        td.verify(callback(captor.capture()), { ignoreExtraArgs: true });
        td.verify(callback(), { times: 2, ignoreExtraArgs: true });
      } catch (error) {
        const errorMessage = error.message.split('\n');

        t.notOk(true, errorMessage.shift());

        if (!errorMessage[0].length) {
          errorMessage.shift();
        }

        t.end();

        return errorMessage.forEach(l => {
          console.info(color('error stack', leftPad(l, 9)));
        });
      }
      t.end();
    });

    test('should return a new array', t => {
      const testArr = map(arrayLike, x => x);
      t.assertNot(Object.is(arrayLike, testArr));
      t.end();
    });

    test('should not mutate the previous array', t => {
      map(arrayLike, s => s + 'fie');
      t.assert(arrayLike[0] === 'foo', 'expect arrayLike[0] to be `foo`');
      t.assert(arrayLike[1] === 'bar', 'expect arrayLike[1] to be `bar`');

      t.end();
    });

    end();
  });
  end();
});
