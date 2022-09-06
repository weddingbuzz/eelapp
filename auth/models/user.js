const Sequelize = require("sequelize");
const sequelize = require("../config/database.js");
const MyClass = require("./myClass.js");
const Section = require("./section.js");
const School = require("./school.js");
const StudentInfo = require("./studentInfo.js");

var User = sequelize.define(
  "User", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone_number: Sequelize.STRING,
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
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

User.belongsTo(MyClass, {
  foreignKey: "class_id", // change column name
});

User.belongsTo(Section, {
  foreignKey: "section_id", // change column name
});

User.belongsTo(School, {
  foreignKey: "school_id", // change column name
});

User.hasOne(StudentInfo, {
  foreignKey: "student_id", // change column name
});


module.exports = User;

