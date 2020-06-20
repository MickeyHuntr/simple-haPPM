'use strict';

const { Epic } = require('../models/');
const Path = require('path');
const Pug = require("pug");

module.exports = {
    create: async (request, h) => {
        const result = await Epic.create({
            name: request.payload.name,
            description: request.payload.description,
            state: request.payload.state,
        });

        return Pug.renderFile(Path.join(__dirname, '../views/components/epic.pug'), {
            epic: result
        })
    },
    read: async (request, h) => {
        const epic = await Epic.findOne({
            where: {
                id: request.params.id
            }
        });

        return h.view('epic', {
            epic,
            page: `${epic.name} — Epic`
        })
    },
    update: async (request, h) => {
        const values = {
            name: request.payload.name,
            description: request.payload.description,
            state: request.payload.state,
        };

        const options = {
            where: {
                id: request.params.id
            }
        };

        await Epic.update(values, options);
        const result = await Epic.findOne(options);

        return Pug.renderFile(Path.join(__dirname, '../views/components/epic.pug'), {
            epic: result
        })
    },
    delete: async (request, h) => {
        await Epic.destroy({
            where: {
                id: request.params.id
            }
        });

        return h.redirect('/epics')
    }
}