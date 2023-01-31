const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define(
    'videogame',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      description: {
        type: DataTypes.TEXT,
        defaultValue: 'No description',
        allowNull: false,
      },

      released: {
        type: DataTypes.STRING,
        defaultValue: '2000-01-01',
      },

      rating: {
        type: DataTypes.FLOAT,
        defaultValue: 0.25,
      },

      platform: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: ['PC'],
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        defaultValue:
          'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1902/pavelstasevich190200120/124934975-no-hay-icono-de-imagen-disponible-vector-plano.jpg?ver=6',
      },
    },
    { timestamps: false }
  );
};
