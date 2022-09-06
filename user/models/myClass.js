import Sequelize from "sequelize";
import sequelize from "../config/database.js";

const MyClass = sequelize.define(
  "MyClass",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    class_number: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    group: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    school_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "MyClass", // We need to choose the model name
    tableName: "classes",
    timestamps: false,
  }
);

export default MyClass;
