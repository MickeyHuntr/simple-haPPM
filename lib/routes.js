'use strict';

const Path = require('path');
const Tasks = require("./controllers/tasks");
const Epics = require("./controllers/epics");
const Sprints = require("./controllers/sprints");
const Task = require("./controllers/task");
const Epic = require("./controllers/epic");
const Sprint = require("./controllers/sprint");
const epic = require('./controllers/epic');
const sprint = require('./controllers/sprint');

module.exports = [
    // Static files
    {
        // Static files
        method: "GET",
        path: "/{param*}",
        handler: {
            directory: {
                path: Path.join(__dirname, "../static/public")
            }
        },
        config: {
            description: "Provides static resources"
        }
    },
    // Handle 404
    // {
    //     method: ['GET', 'POST'],
    //     path: '/{any*}',
    //     handler: (request, h) => {
    //         return `<body style='background-color:#1b1c21'><center><iframe src="https://giphy.com/embed/afqT2ykIlYcVi" width="480" height="475" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dashboard-confessions-afqT2ykIlYcVi"></a></p><br><h1 style="font-family:Arial">*Me working on this project forgetting to program this page*</h1></center></body>`
    //     }
    // },
    // Home Page
    {
        method: 'GET',
        path: '/',
        handler: Tasks,
        config: {
            description: 'Gets all tasks'
        }
    },
    // Listing all available tasks, epics and sprints
    {
        method: 'GET',
        path: '/tasks',
        handler: Tasks,
        config: {
            description: 'Gets all tasks'
        }
    },
    {
        method: 'GET',
        path: '/epics',
        handler: Epics,
        config: {
            description: 'Gets all epics'
        }
    },
    {
        method: 'GET',
        path: '/sprints',
        handler: Sprints,
        config: {
            description: 'Gets all sprints'
        }
    },
    // Get a task, epic or sprint
    {
        method: 'GET',
        path: '/task/{id}',
        handler: Task.read,
        config: {
            description: 'Gets a particular task'
        }
    },
    {
        method: 'GET',
        path: '/epic/{id}',
        handler: Epic.read,
        config: {
            description: 'Gets a particular epic'
        }
    },
    {
        method: 'GET',
        path: '/sprint/{id}',
        handler: Sprint.read,
        config: {
            description: 'Gets a particular sprint'
        }
    },
    // Create a task, epic or sprint
    {
        method: 'POST',
        path: '/task',
        handler: Task.create,
        config: {
            description: 'Create new task',
            payload: {
                multipart: true,
            }
        }
    },
    {
        method: 'POST',
        path: '/epic',
        handler: Epic.create,
        config: {
            description: 'Create new epic',
            payload: {
                multipart: true,
            }
        }
    },
    {
        method: 'POST',
        path: '/sprint',
        handler: Sprint.create,
        config: {
            description: 'Create new sprint',
            payload: {
                multipart: true,
            }
        }
    },
    // Modify a task, epic or sprint
    {
        method: ['PUT', 'POST'],
        path: '/task/{id}',
        handler: Task.update,
        config: {
            description: 'Modifies a particular task',
            payload: {
                multipart: true,
            }
        }
    },
    {
        method: ['PUT', 'POST'],
        path: '/epic/{id}',
        handler: Epic.update,
        config: {
            description: 'Modifies a particular epic',
            payload: {
                multipart: true,
            }
        }
    },
    {
        method: ['PUT', 'POST'],
        path: '/sprint/{id}',
        handler: Sprint.update,
        config: {
            description: 'Modifies a particular sprint',
            payload: {
                multipart: true,
            }
        }
    },
    // Delete a task, epic or sprint
    {
        method: 'GET',
        path: '/task/{id}/delete',
        handler: Task.delete,
        config: {
            description: 'Deletes a particular task'
        }
    },
    {
        method: 'GET',
        path: '/epic/{id}/delete',
        handler: Epic.delete,
        config: {
            description: 'Deletes a particular epic'
        }
    },
    {
        method: 'GET',
        path: '/sprint/{id}/delete',
        handler: Sprint.delete,
        config: {
            description: 'Deletes a particular sprint'
        }
    },
    // Delete task, epic or sprint (REST METHOD)
    {
        method: 'DELETE',
        path: '/task/{id}',
        handler: Task.delete,
        config: {
            description: 'Deletes a particular task'
        }
    },
    {
        method: 'DELETE',
        path: '/epic/{id}',
        handler: Epic.delete,
        config: {
            description: 'Deletes a particular epic'
        }
    },
    {
        method: 'DELETE',
        path: '/sprint/{id}',
        handler: Sprint.delete,
        config: {
            description: 'Deletes a particular sprint'
        }
    }
]