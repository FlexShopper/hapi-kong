(function () {
    'use strict';

    const SDK = require('kong-node');

    exports.register = function (server, options, next) {
        server.expose('kong-sdk', new SDK(options));

        return next();
    };

    exports.register.attributes = {
        multiple: false,
        pkg: require('../package.json')
    };
})();

