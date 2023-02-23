// require model datatypes
const { Model, DataTypes } = require("sequelize");
//bcrypt
const bcrypt = require("bcrypt");
//require sequelize
const sequelize = require("../config/connection");

//create User model
class User extends Model {
  //check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
