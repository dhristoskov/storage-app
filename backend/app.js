const express = require('express');
const bodyParser = require('body-parser');
const ConnectDB = require('./connectDB');

//Routes
const produtsRoutes = require('./routes/product-routes');
const storagesRoutes = require('./routes/storage-router');
const userRoutes = require('./routes/user-routes');

const app = express();
ConnectDB();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
});

app.use('/api/produtcs', produtsRoutes);
app.use('/api/storage', storagesRoutes);
app.use('/api/user', userRoutes);


//Connect to DB - MongoDB
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));