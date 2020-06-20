'use strict';

const Models = require('../models/');

module.exports = async (request, h) => {
    const result = await Models.Epic.findAll({
        order: [['id', 'DESC']]
    });

    return h.view('epics', {
        data: {
            epics: result
        },
        page: "All Epics",
        description: "Here you can browse all epics"
    });
}