import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import MyClass from "./myClass.js";

const School = sequelize.define(
    "School",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        about: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        medium: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        code: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        area: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        theme: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        modelName: "School", // We need to choose the model name
        tableName: "schools",
        timestamps: false,
    }
);

School.hasMany(MyClass, {
    foreignKey: "school_id", // change column name
})

export default School;
