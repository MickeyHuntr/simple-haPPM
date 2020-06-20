'use strict';

module.exports = (sequelize, DataTypes) => {
    const Epic = sequelize.define('Epic', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        state: {
            type: DataTypes.ENUM,
            values: ['draft', 'ready', 'work_in_progress', 'completed']
        }
    });

    return Epic;
}