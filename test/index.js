(function () {
    'use strict';

    const Code = require('code');
    const Lab = require('lab');

    const lab = exports.lab = Lab.script();
    const describe = lab.describe;
    const it = lab.it;
    const expect = Code.expect;

    describe('hapi-kong', () => {
        it('can be required', done => {

            const hapiKong = require('..');
            expect(hapiKong).to.exist();

            done();
        });
    });
})();

