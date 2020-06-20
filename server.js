"use strict";

const Hapi = require('@hapi/hapi');
const Settings = require('./settings');
const dbSettings = Settings.db;
const Routes = require('./lib/routes');
const Models = require("./lib/models/");
const Path = require("path");

(async () => {
    const server = new Hapi.server({ port: Settings.port });

    await server.register([require("@hapi/vision"), require("@hapi/inert")]);

    server.views({
        engines: { pug: require("pug") },
        path: Path.join(__dirname, "lib/views"),
        compileOptions: {
            pretty: false
        },
        isCached: true
    });

    server.route(Routes);

    await Models.sequelize.sync();
    await server.start();
    console.log(`Server running at ${server.info.uri}`)
})();

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})