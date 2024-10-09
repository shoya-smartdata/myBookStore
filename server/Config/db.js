const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'Bookstore', 'root', 'smart@2099', {
   host: 'localhost',
   dialect: 'mysql'
    }
)
const createDatabase = ()=>{
   try {
    sequelize.authenticate();
    console.log("your app  is connnected successfully  to database !");
    
   } catch (error) {
     console.log(error, " unable to create database ! ");
     
   }
}

createDatabase();

module.exports = sequelize;