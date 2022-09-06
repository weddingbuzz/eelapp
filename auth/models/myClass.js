"use strict";

const Sequelize = require('sequelize');
const sequelize = require('../config/database.js');

var MyClass = sequelize.define(
  "MyClass",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    class_number: Sequelize.STRING,
    group: Sequelize.STRING,
    school_id: Sequelize.INTEGER,
  },
  {
    modelName: "MyClass",
    tableName: "classes",
    timestamps: false,
  }
);
module.exports = MyClass;
