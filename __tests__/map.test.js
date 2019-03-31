import { test } from 'tap';
import td from 'testdouble';

td.config({ suppressErrors: true });

import map from '../lib/map';
test('map', ({ test, end }) => {
  test('should be a function', t => {
    t.assert(typeof map === 'function');
    t.end();
  });

  test('should iterate over an array', t => {
    // const callback = td.function('callback');
    // const captor = td.matchers.captor();
    t.ok(true);
    t.end();

    // TODO: figure out how to best write this test

    // const array = [1, 2, 3, 4];
    // map(array, callback);

    // td.verify(callback(captor.capture()), { ignoreExtraArgs: true });
    // td.verify(callback(), { times: 4, ignoreExtraArgs: true });
    // t.end();
  });
  end();
});
