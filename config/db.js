const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// Create an instance of sequelize
const sequelize =
    new Sequelize(
        process.env.DATABASE_NAME,
        process.env.DATABASE_USERNAME,
        process.env.DATABASE_PASSWORD, 
        {
        host: 'localhost',
        dialect: 'mysql'
    })

//     const connectDB = async ()=>{
//         try {
//            await sequelize.authenticate();
//            console.log('Successfully connected to the database!')
//         } catch (error) {
//              console.error(error.message);
//              process.exit(1);
//         }
//  }

  module.exports = sequelize; 