import Sequelize from 'sequelize';
import sequelize from "../config/database.js";
import MyClass from './myClass.js';
import Section from './section.js';
import School from './school.js';

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  admin_role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  student_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  active: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  verified: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  school_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  section_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  class_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  about: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  blood_group: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nationality: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  department_id: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  modelName: 'User', // We need to choose the model name
  tableName: 'users',
  timestamps: false
});

// We save the return values of the association setup calls to use them later
User.belongsTo(MyClass, {
  foreignKey: "class_id", // change column name
});

User.belongsTo(Section, {
  foreignKey: "section_id", // change column name
});

User.belongsTo(School, {
  foreignKey: "school_id", // change column name
});

export default User;