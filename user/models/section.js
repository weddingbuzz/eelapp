import Sequelize from "sequelize";
import sequelize from "../config/database.js";
import MyClass from "./myClass.js";

const Section = sequelize.define(
  "Section",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    section_number: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    room_number: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    class_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Section", // We need to choose the model name
    tableName: "sections",
    timestamps: false,
  }
);

// We save the return values of the association setup calls to use them later
Section.belongsTo(MyClass, {
  foreignKey: "class_id", // change column name
});

export default Section;
