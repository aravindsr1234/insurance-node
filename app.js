const express = require('express');
const app = express();
const connectDb = require('./src/dataBase/connection');
var cors = require('cors');

const port = 3030;
app.use(cors());

require('dotenv').config();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./src/route/insuranceRoute'));
app.use('/customer', require('./src/route/customerRoute'));

app.listen(port, () => {
    console.log('port running on', port);
})