const mongoose = require('mongoose');

//Localhost mongoDB url
const url = 'mongodb://localhost:27017/storageDB'

const ConnectDB = async () => {

    try{
        await mongoose.connect(url, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
        console.log('Connected to MongoDB successfuly!')
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = ConnectDB;