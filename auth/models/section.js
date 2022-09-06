const Sequelize = require("sequelize");
const sequelize = require("../config/database.js");

var Section = sequelize.define(
  "Section", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    section_number: Sequelize.STRING,
    room_number: Sequelize.STRING,
    class_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
  },
  {
    sequelize,
    modelName: "Section",
    tableName: "sections",
    timestamps: false,
  }
);
module.exports = Section;
