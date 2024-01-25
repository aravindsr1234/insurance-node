const mongoose = require('mongoose');

const customer = mongoose.Schema({
    salutaion: String,
    name: String,
    email: String,
    gender: String,
    dob: Number,
    age: Number,
    address: String,
    qualification: String,
    profession: String,
    nominee: String,
    relationNominee: String,
    insurance: String
})

const customerCollection = mongoose.model('customer', customer);

module.exports = customerCollection;