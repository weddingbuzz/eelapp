const env = process.env.NODE_ENV || 'development';
const configuration =  require('./config.js');
const sequelize = require('sequelize');

const config = configuration[env];

const Sequelize = new sequelize(config.database, config.username,
  config.password, {
	host: config.host,
	dialect: config.dialect,
	operationsAliases: false,
  }
);

Sequelize.authenticate().then(()=>{
	console.log('connected');
}).catch((err)=>{
	console.log(err);
})


module.exports =  Sequelize;