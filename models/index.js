

const profile = require('./profiles');
const account = require('./accounts');

profile.belongsTo(user, {
  foreignKey: 'account_id',
});

module.exports = {
profile, 
user,
};

<<<<<<< HEAD
module.exports = db;

// 🔥🔥🔥 For Models / Table Relationships 🔥🔥🔥 

const profile = require('./profile');
const account = require('./account');

profile.belongsTo(user, {
  foreignKey: 'accountId',
});

module.exports = {
profile, 
user,
};
=======





// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
>>>>>>> 808fdcc6d5214b0705d095d479c28fb5a066531c
