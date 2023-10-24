const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');



 // Validate and connect to the database
 sequelize
 .authenticate()
 .then(() => console.log('Successfully connected to the database!'))
 .catch((error) => console.log('Failed to connect the database:', error))

const port = process.env.PORT || 4002;

app.listen(port,()=>{
  console.log(`server is running on ${port}`);
})
