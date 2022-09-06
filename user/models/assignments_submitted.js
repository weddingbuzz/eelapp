import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import Assignment from "./assignment.js";
import User from "./user.js";

const AssignmentsSubmitted = sequelize.define(
    "AssignmentsSubmitted",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        assignment_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        file_path: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        marks: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            name: 'createdAt',
            field: 'created_at'
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            name: 'updatedAt',
            field: 'updated_at'
        }
    },
    {
        modelName: "AssignmentsSubmitted", // We need to choose the model name
        tableName: "assignments_submitted",
    }
);

// We save the return values of the association setup calls to use them later
AssignmentsSubmitted.belongsTo(Assignment, {
    foreignKey: "assignment_id", // change column name
});

AssignmentsSubmitted.belongsTo(User, {
    foreignKey: "user_id", // change column name
});

export default AssignmentsSubmitted;
