'use strict';

const Models = require('../models/');

module.exports = async (request, h) => {
    const result = await Models.Sprint.findAll({
        order: [['id', 'DESC']]
    });

    return h.view('sprints', {
        data: {
            sprints: result
        },
        page: "All Sprints",
        description: "Here you can browse all sprints"
    });
}