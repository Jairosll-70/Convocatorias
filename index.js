const express = require('express');
const mongoose = require('mongoose');
const convocatoriaRoutes = require('./routes/convocatoria');

// create the express instace and asign the port
const app = express();
const port = 3000;

// create the mongoose connection for the local database (for deployment use the mongoDB cloud url)
const url= "mongodb+srv://dbUser:toor@cluster0.xz3sa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());

// test the connection of the database
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

// app add routes

app.use('/', convocatoriaRoutes);

// init the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));