const Sequelize = require("sequelize");
const sequelize = require("../config/database.js");

var StudentInfo = sequelize.define(
  "StudentInfo", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    student_id: Sequelize.INTEGER,
    session: Sequelize.STRING,
    admission_session: Sequelize.STRING,
    admission_no: Sequelize.STRING,
    form_number: Sequelize.STRING,
    admission_date: Sequelize.STRING,
    registration_number: Sequelize.STRING,
    roll_number: Sequelize.STRING,
    birthday: Sequelize.STRING,
    religion: Sequelize.STRING,
    caste: Sequelize.STRING,
    sub_caste: Sequelize.STRING,
    uin_code: Sequelize.STRING,
    student_type: Sequelize.STRING,
    academic_details: Sequelize.TEXT,
    father_name: Sequelize.STRING,
    father_phone_number: Sequelize.STRING,
    father_national_id: Sequelize.STRING,
    father_designation: Sequelize.STRING,
    father_qualification: Sequelize.STRING,
    father_annual_income: Sequelize.STRING,
    mother_name: Sequelize.STRING,
    mother_phone_number: Sequelize.STRING,
    mother_national_id: Sequelize.STRING,
    mother_designation: Sequelize.STRING,
    mother_qualification: Sequelize.STRING,
    mother_annual_income: Sequelize.STRING
  },
  {
    sequelize,
    modelName: "StudentInfo",
    tableName: "student_infos",
    timestamps: false,
  }
);
module.exports =  StudentInfo;
