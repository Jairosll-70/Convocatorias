const express = require('express');
const mongoose = require('mongoose');
const convocatoriaRoutes = require('./routes/convocatoria.js');

// create the express instace and asign the port
const app = express();

app.use(express.json());

// create the mongoose connection for the local database (for deployment use the mongoDB cloud url)
mongoose.connect("mongodb+srv://dbUser:toor@cluster0.xz3sa.mongodb.net/Convocatorias?retryWrites=true&w=majority",{useNewUrlParser: true}).then(() => {
    console.log("successfully connected to db");
  })
  .catch((err) => {
    console.log("db connection failed " + err);
  });


// app add routes

app.use(convocatoriaRoutes);

// init the server
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));