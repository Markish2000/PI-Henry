/** @format */

const { DataTypes } = require("sequelize");
// We export a function that defines the model
//Then we inject the connection to sequelize
module.exports = (sequelize) => {
  // define the model
  sequelize.define(
    "genre",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        defaultValue: "No name",
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
