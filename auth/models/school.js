const Sequelize = require("sequelize");
const sequelize = require("../config/database.js");

var School = sequelize.define(
  "School",{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    type: Sequelize.STRING,
    about: Sequelize.STRING,
    medium: Sequelize.INTEGER,
    code: Sequelize.STRING,
    area: Sequelize.STRING,
    address: Sequelize.STRING,
    contact_person: Sequelize.STRING,
    logo: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "School",
    tableName: "schools",
    timestamps: false,
  }
);
module.exports = School;
