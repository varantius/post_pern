const DataTypes = require("sequelize").DataTypes;
var _about = require("./about");
var _posts = require("./posts");
var _users = require("./users");

function initModels(sequelize) {
  var about = _about(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  posts.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(posts, { as: "posts", foreignKey: "user_id"});

  return {
    about,
    posts,
    users,
  };
}

module.exports = initModels;
