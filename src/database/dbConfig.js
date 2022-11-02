const Sequelize = require("sequelize");

const sequelize = new Sequelize("character_gen", "root", "leirdan", {
  host: "localhost",
  dialect: "mysql",
  query: { raw: true },
});

sequelize
  .authenticate()
  .then(() => console.log("Tudo certo."))
  .catch((err) => console.log(err));

let data = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
module.exports = data;
