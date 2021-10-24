
module.exports = function(sequelize, DataTypes) {
  const Users =  sequelize.define('users', {
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });

  // Users.associate = models => {
  //   Users.hasMany(models.Posts, {
  //     onDelete: "cascade",
  //     // as: "posts",
  //     // foreignKey: "user_id"
  //   });
  // }

  // Users.associate = (models) => {
  //   // const { Posts } = models
  //
  //    Users.hasMany(models.Posts, {
  //      onDelete: "cascade",
  //      as: "posts",
  //      foreignKey: "user_id"
  //   })
  // }

  return Users
};
