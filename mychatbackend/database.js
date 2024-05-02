const Sequelize=require('sequelize');
const sequelize=new Sequelize("chat_schema","root","Sanjay@123",{
    dialect:"mysql",
    host:"localhost"
})

module.exports=sequelize;