const { assert } = require('chai');

suite('general', () => {

    setup(() => {
        // ...
    });

    teardown(() => {
        // ...
    });

    test('is example of how to use assert', () => {
        assert.equal(true, !!1);
        assert.strictEqual(1, 1);
        assert.deepEqual(1, 1);
        assert.deepEqual([2], [2]);
        assert.isBelow(1, 3);
        assert.notEqual(1, 2);
        assert.isOk(true);
        assert.ok(true);
        assert.isNotOk('');
        assert.isFalse(false);
        assert.notOk(false);
        assert.isEmpty([]);
        assert.isUndefined(({}).name);
        assert.typeOf({}, 'object');
        assert.match('asd', /s/);
        assert.oneOf('asd', ['zxc', 'asd', 'qwe']);
    });
});
