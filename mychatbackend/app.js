const express=require('express');
const app=express();
const sequelize=require("./database")

const User=require('./models/User');

const UserRoutes=require('./routes/userRoutes');

const cors=require('cors');
const bodyParser=require('body-parser');

app.use(bodyParser.json());

app.use(cors());

app.use('/users',UserRoutes);
const PORT=5000

sequelize.sync({alter:true})
    .then(()=>{
        console.log("database synced");

        app.listen(PORT,()=>{
            console.log(`server running on Port ${PORT}`)
        });
    })
    .catch((error)=>console.error("Error syncing database",error))