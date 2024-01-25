const express = require('express');
const router = express.Router();
const controller = require('../controller/insurancePolicyController');

router.get('/', controller.find);
router.post('/', controller.create);

module.exports = router;