import Sequelize from "sequelize";
import sequelize from "../config/database.js"; 
import MyClass from "./myClass.js";
import NetCourseCoverage from "./net_course_coverage.js";
import Section from "./section.js";
import Syllabus from "./syllabus.js";
import Teacher from "./teacher.js";

const Course = sequelize.define(
    "Course",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        course_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        class_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        course_type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        course_time: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        school_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        exam_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        class_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        teacher_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        is_deleted: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    },
    {
        modelName: "Course", // We need to choose the model name
        tableName: "courses",
        timestamps: false,
    }
);

// We save the return values of the association setup calls to use them later
Course.belongsTo(Section, {
    foreignKey: "section_id", // change column name
});
Course.belongsTo(MyClass, {
    foreignKey: "class_id", // change column name
});
Course.belongsTo(Teacher, {
    foreignKey: "teacher_id", // change column name
});
Course.hasOne(Syllabus, {
    foreignKey: "course_id", // change column name
});
Course.hasMany(NetCourseCoverage, {
    foreignKey: "course_id", // change column name
});

export default Course;
