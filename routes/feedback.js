const path = require('path');

const express = require('express');

const router = express.Router();

const feedbackController = require('../controllers/feedback');

router.get('/contactus',feedbackController.getContactUs);

router.post('/success',feedbackController.postContactUs);

router.get('/success',feedbackController.getSuccess);

module.exports = router;