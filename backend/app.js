const express = require('express');
const bodyParser = require('body-parser');
const ConnectDB = require('./connectDB');

//Routes
const produtsRoutes = require('./routes/product-routes');

const app = express();
ConnectDB();

app.use(bodyParser.json());

app.use('/api/produtcs', produtsRoutes);


//Connect to DB - MongoDB
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));