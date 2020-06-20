'use strict';

const { Task } = require('../models/');
const Path = require('path');
const Pug = require("pug");
const Models = require('../models/');

module.exports = {
    create: async (request, h) => {
        const result = await Task.create({
            name: request.payload.name,
            description: request.payload.description,
            acceptance_criteria: request.payload.acceptance_criteria,
            state: request.payload.state,
            points: request.payload.points,
            epic: request.payload.epic,
            sprint: request.payload.sprint
        });

        return Pug.renderFile(Path.join(__dirname, '../views/components/task.pug'), {
            task: result
        })
    },
    read: async (request, h) => {
        var task = await Task.findOne({
            where: {
                id: request.params.id
            }
        });

        task.epic = await Models.Epic.findOne({
            where: {
                id: task.epic
            }
        });

        task.sprint = await Models.Sprint.findOne({
            where: {
                id: task.sprint
            }
        });

        //return task;
        return h.view('task', {
            task,
            page: `${task.name} — Task`
        })
    },
    update: async (request, h) => {
        const values = {
            name: request.payload.name,
            description: request.payload.description,
            acceptance_criteria: request.payload.acceptance_criteria,
            state: request.payload.state,
            points: request.payload.points,
            epic: request.payload.epic,
            sprint: request.payload.sprint
        };

        const options = {
            where: {
                id: request.params.id
            }
        };

        await Task.update(values, options);
        const result = await Task.findOne(options);

        return Pug.renderFile(Path.join(__dirname, '../views/components/task.pug'), {
            task: result
        })
    },
    delete: async (request, h) => {
        await Task.destroy({
            where: {
                id: request.params.id
            }
        });

        return h.redirect('/tasks')
    }
}