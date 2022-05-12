const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Default"
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    upvote:{
      type:DataTypes.INTEGER,
      allowNull: false,
      defaultValue:"0"
    },
    downvote:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue: "0",
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;
