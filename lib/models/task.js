'use strict';

module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        acceptance_criteria: DataTypes.TEXT,
        state: {
            type: DataTypes.ENUM,
            values: ['draft', 'open', 'work_in_progress', 'ready_for_testing', 'testing', 'completed']
        },
        points: DataTypes.INTEGER,
        epic: DataTypes.STRING,
        sprint: DataTypes.STRING
    });

    return Task;
}