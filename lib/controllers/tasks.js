'use strict';

const Models = require("../models/");

module.exports = async (request, h) => {
    const result = await Models.Task.findAll({
        order: [['id', 'DESC']]
    });

    var fullResults = [];
    for (let i = 0; i < result.length; i++) {
        let tmp = result[i];
        let foundEpic = await Models.Epic.findOne({
            where: {
                id: result[i].epic
            }
        });
        let foundSprint = await Models.Sprint.findOne({
            where: {
                id: result[i].sprint
            }
        });
        tmp.epic = foundEpic;
        tmp.sprint = foundSprint;
        fullResults.push(tmp)
    }

    return h.view('tasks', {
        data: {
            tasks: fullResults
        },
        page: "All Tasks",
        description: "Here you can browse all tasks"
    });
}