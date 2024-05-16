const express=require('express');
const app=express();
const sequelize=require("./database")

const UserRoutes=require('./routes/userRoutes');
const chatRoutes=require('./routes/chatRoutes');

const cors=require('cors');
const bodyParser=require('body-parser');

app.use(bodyParser.json());

app.use(cors());

app.use('/users',UserRoutes);
app.use('/chat',chatRoutes)
const PORT=5000

sequelize.sync({alter:true})
    .then(()=>{
        console.log("database synced");

        app.listen(PORT,()=>{
            console.log(`server running on Port ${PORT}`)
        });
    })
    .catch((error)=>console.error("Error syncing database",error))