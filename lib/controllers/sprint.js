'use strict';

const { Sprint } = require('../models/');
const Path = require('path');
const Pug = require("pug");

module.exports = {
    create: async (request, h) => {
        const result = await Sprint.create({
            name: request.payload.name,
            start_date: request.payload.start_date,
            end_date: request.payload.end_date,
            state: request.payload.state,
        });

        return Pug.renderFile(Path.join(__dirname, '../views/components/sprint.pug'), {
            sprint: result
        })
    },
    read: async (request, h) => {
        const sprint = await Sprint.findOne({
            where: {
                id: request.params.id
            }
        });

        return h.view('sprint', {
            sprint,
            page: `${sprint.name} — Sprint`
        })
    },
    update: async (request, h) => {
        const values = {
            name: request.payload.name,
            start_date: request.payload.start_date,
            end_date: request.payload.end_date,
            state: request.payload.state,
        };

        const options = {
            where: {
                id: request.params.id
            }
        };

        await Sprint.update(values, options);
        const result = await Sprint.findOne(options);

        return Pug.renderFile(Path.join(__dirname, '../views/components/sprint.pug'), {
            sprint: result
        })
    },
    delete: async (request, h) => {
        await Sprint.destroy({
            where: {
                id: request.params.id
            }
        });

        return h.redirect('/sprints')
    }
}