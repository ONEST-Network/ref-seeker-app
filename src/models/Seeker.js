const { sequelize } =  require("../connections/databaseConnection");
const { DataTypes } = require('sequelize');

const Seeker = sequelize.define('seeker', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_by: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "SYSTEM",
    },
    updated_by: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "SYSTEM",
    }
}, {
    timestamps: true,
    createdAt: 'created_on',
    updatedAt: 'updated_on',
    tableName: 'seeker'
});

module.exports = {Seeker}