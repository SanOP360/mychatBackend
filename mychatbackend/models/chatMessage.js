const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./User");

const ChatMessage = sequelize.define("ChatMessage", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

ChatMessage.belongsTo(User); // This establishes the association

module.exports = ChatMessage;
