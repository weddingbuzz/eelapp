import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import School from "./school.js";

const Notice = sequelize.define(
    "Notice",
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
        total_sms_sent: {
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
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    },
    {
        modelName: "Notice", // We need to choose the model name
        tableName: "notices",
        timestamps: false,
    }
);

// We save the return values of the association setup calls to use them later
Notice.belongsTo(School, {
    foreignKey: "school_id", // change column name
});

export default Notice;
