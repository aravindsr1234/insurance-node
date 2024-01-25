const express = require('express');
const router = express.Router();
const controller = require('../controller/customerController');

router.get('/', controller.find);
router.post('/',  controller.create);
// router.put('/',  controller.update);
// router.delete('/', controller.delete);

module.exports = router;