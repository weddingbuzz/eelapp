import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import School from "./school.js";

const Syllabus = sequelize.define(
    "Syllabus",
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
        course_id: {
            type: Sequelize.INTEGER,
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
        class_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        section_id: {
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
        modelName: "Syllabus", // We need to choose the model name
        tableName: "syllabuses",
        timestamps: false,
    }
);

// We save the return values of the association setup calls to use them later
Syllabus.belongsTo(School, {
    foreignKey: "school_id", // change column name
});

export default Syllabus;
