const Sequelize = require("sequelize");
const sequelize = require("../config/database.js");

var Teacher = sequelize.define(
  "Teacher", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone_number: Sequelize.INTEGER,
    role: Sequelize.STRING,
    password: Sequelize.STRING,
    school_id: Sequelize.INTEGER,
    class_id: Sequelize.INTEGER,
    section_id: Sequelize.INTEGER,
    code: Sequelize.STRING,
    student_code: Sequelize.STRING,
    gender: Sequelize.STRING,
    active: Sequelize.INTEGER,
    blood_group: Sequelize.STRING,
    aadhar: Sequelize.STRING,
    nationality: Sequelize.STRING,
    blood_group: Sequelize.STRING,
    address: Sequelize.STRING,
    district: Sequelize.STRING,
    state: Sequelize.STRING,
    country: Sequelize.STRING,
    pin_code: Sequelize.STRING,
    about: Sequelize.STRING,
    pic_path: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "Teacher",
    tableName: "users",
    timestamps: false,
  }
);
module.exports =  Teacher;
