const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define(
    'platform',
    {
      name: {
        type: DataTypes.STRING,
        defaultValue: 'No name',
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
