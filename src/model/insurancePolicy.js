const mongoose = require('mongoose');

const insurancePolicy = mongoose.Schema({
    insuranceName: String,
    amount: Number,
    specificInsuranceDetails: [{}],
})

const insuranceCollection = mongoose.model('insurancePolicy', insurancePolicy);

module.exports = insuranceCollection;