const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/iConnect.controller');

const jwtHelper = require('../config/jwt');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/employeeProfile',jwtHelper.verifyJwtToken, ctrlUser.employeeProfile);

module.exports = router;



