const customer = require('../model/customer');

exports.create = async (req, res) => {
    try {
        const { salutaion, name, email, gender, dob, age, address, qualification, profession, nominee, relationNominee, insurance } = req.body;
        console.log(salutaion, name, email, gender, dob, age, address, qualification, profession, nominee, relationNominee, insurance);

        const data = await customer.create({
            salutaion: salutaion,
            name: name,
            email: email,
            gender: gender,
            dob: dob,
            age: age,
            address: address,
            qualification: qualification,
            profession: profession,
            nominee: nominee,
            relationNominee: relationNominee,
            insurance: insurance
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.find = async (req, res) => {
    try {
        const result = await customer.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
}