const mongoose = require('mongoose');

const connectDb = async () => {
    const connect = await mongoose.connect(process.env.DATABASE, {        
    });

    console.log('mongodb connected', connect.connection.host);
};

module.exports = connectDb;
