const env = process.env.NODE_ENV || 'development';
import configuration from  './config.js';
import sequelize from 'sequelize';

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


export default Sequelize;