import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import School from "./school.js";

const Assignment = sequelize.define(
    "Assignment",
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
        sms_text: {
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
        class_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    },
    {
        modelName: "Assignment", // We need to choose the model name
        tableName: "assignments",
        timestamps: false,
    }
);

// We save the return values of the association setup calls to use them later
Assignment.belongsTo(School, {
    foreignKey: "school_id", // change column name
});

export default Assignment;
