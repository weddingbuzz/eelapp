import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import MyClass from "./myClass.js";
import School from "./school.js";

const Exam = sequelize.define(
    "Exam",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        exam_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        active: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        notice_published: {
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
        },
        term: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        session: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        start_date: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        datesheet_published: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        end_date: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        modelName: "Exam", // We need to choose the model name
        tableName: "exams",
        timestamps: false,
    }
);

// We save the return values of the association setup calls to use them later
Exam.belongsTo(School, {
    foreignKey: "school_id", // change column name
});

export default Exam;
