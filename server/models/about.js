const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('about', {
    about_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'about',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "about_pkey",
        unique: true,
        fields: [
          { name: "about_id" },
        ]
      },
    ]
  });
};
