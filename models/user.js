const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // This will automatically add createdAt and updatedAt columns
  underscored: true, // Use snake_case for column names
});

module.exports = User;
