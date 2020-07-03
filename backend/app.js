const express = require('express');
const bodyParser = require('body-parser');
const ConnectDB = require('./connectDB');

//Routes
const produtsRoutes = require('./routes/product-routes');
const storagesRoutes = require('./routes/storage-router');

const app = express();
ConnectDB();

app.use(bodyParser.json());

app.use('/api/produtcs', produtsRoutes);
app.use('/api/storage', storagesRoutes);


//Connect to DB - MongoDB
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));