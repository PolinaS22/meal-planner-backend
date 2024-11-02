const express = require('express');
const app = express();
const routes = require('./MealRoutes');
const cors = require('cors');


// connect mongoose with data base
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", false);


const PORT = 7000 || process.env.port;

app.use(express.json());
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We were connected to Mongo'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log('listening on port 7000')
})

// mongodb+srv://pashishkina:<db_password>@cluster0.svbuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0