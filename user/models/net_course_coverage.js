import Sequelize from "sequelize";
import sequelize from "../config/database.js";

const NetCourseCoverage = sequelize.define(
    "NetCourseCoverage",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        course_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        school_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        session: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        coverage: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    },
    {
        modelName: "NetCourseCoverage", // We need to choose the model name
        tableName: "net_course_coverage",
        timestamps: false,
    }
);

export default NetCourseCoverage;
