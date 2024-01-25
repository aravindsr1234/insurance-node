const insurance = require('../model/insurancePolicy');

exports.create = async (req, res) => {
    try {
        console.log(req.body);
        const specification = req.body.specificInsuranceDetails;

        const data = await insurance.create({
            insuranceName: req.body.insuranceName,
            amount: req.body.amount,
            specificInsuranceDetails: req.body.specificInsuranceDetails
        });
        console.log("data", data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.find = async (req, res) => {
    try {
        const result = await insurance.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error)
    }
}