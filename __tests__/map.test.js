import { test } from 'tap';
import _ from '../lib/index';

test('map', ({ test, end }) => {
  test('It should be a function', t => {
    t.assert(typeof _.map === 'function');
    t.end();
  });
  end();
});
