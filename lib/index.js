( () => {
    'use strict';

    const SDK = require('@flexshopper/kong-node');

    exports.register = (server, options, next) => {
        server.expose('kong-sdk', new SDK(options));

        return next();
    };

    exports.register.attributes = {
        multiple: false,
        pkg: require('../package.json')
    };
})();

