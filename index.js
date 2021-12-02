const cors = require('cors'); 
const express = require('express');

const mongoose = require('mongoose');
const convocatoriaRoutes = require('./routes/convocatoria.js');

// create the express instace and asign the port
const app = express();
app.use(cors());
app.use(express.json());

// create the mongoose connection for the local database (for deployment use the mongoDB cloud url)
// mongodb+srv://jairosll:LaVidaEsBella@cluster0.6gpiz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb+srv://dbUser:toor@cluster0.xz3sa.mongodb.net/Convocatorias?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://jairosll:LaVidaEsBella@cluster0.6gpiz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser: true}).then(() => {
    console.log("successfully connected to db");
  })
  .catch((err) => {
    console.log("db connection failed " + err);
  });


  
// app add routes

app.use(convocatoriaRoutes);

// init the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
