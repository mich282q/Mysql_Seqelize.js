const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelizejs', 'root', '8305', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'Michael',
      lastName: 'Trans'
    });
  });
