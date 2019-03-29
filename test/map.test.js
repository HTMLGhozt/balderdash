import test from 'ava';
import _ from '../src/index';

test('It is a function', t => {
  t.assert(typeof _.map === 'function');
});
