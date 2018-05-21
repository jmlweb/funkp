import assert from 'assert';

import isArray from './';

describe('isArray', () => {
    it('works with array', () => {
        const tested = isArray(['a']);
        const expected = true;
        assert.equal(tested, expected, 'Should return true');
    });
    it('works with string', () => {
        const tested = isArray('a');
        const expected = false;
        assert.equal(tested, expected, 'Should return false');
    });
    it('works with number', () => {
        const tested = isArray(1);
        const expected = false;
        assert.equal(tested, expected, 'Should return false');
    });
    it('works with object', () => {
        const tested = isArray({ a: 'a' });
        const expected = false;
        assert.equal(tested, expected, 'Should return false');
    });
    it('returns false for undefined', () => {
        const a = {};
        const tested = isArray(a.a);
        const expected = false;
        assert.equal(tested, expected, 'Should return false');
    });
});