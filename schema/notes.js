const {DataTypes} = require('sequelize');
const sequelize =  require("../config/database");

const Note = sequelize.define("Note", {
    title: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = Note;