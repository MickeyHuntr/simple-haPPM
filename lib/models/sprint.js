'use strict';

const Moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Sprint = sequelize.define('Sprint', {
        name: DataTypes.STRING,
        start_date: {
            type: DataTypes.DATE,
            get: function() {
                return Moment(this.getDataValue('start_date')).format('DD-MM-YYYY');
            }
        },
        end_date: {
            type: DataTypes.DATE,
            get: function() {
                return Moment(this.getDataValue('start_date')).format('DD-MM-YYYY');
            }
        },
        state: {
            type: DataTypes.ENUM,
            values: ['draft', 'ready', 'work_in_progress', 'completed']
        }
    });

    return Sprint;
}