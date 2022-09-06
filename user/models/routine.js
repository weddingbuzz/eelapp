import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import MyClass from "./myClass.js";
import School from "./school.js";

const Routine = sequelize.define(
    "Routine",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        file_path: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        active: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        school_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    },
    {
        modelName: "Routine", // We need to choose the model name
        tableName: "routines",
        timestamps: false,
    }
);

// We save the return values of the association setup calls to use them later
Routine.belongsTo(School, {
    foreignKey: "school_id", // change column name
});

export default Routine;
