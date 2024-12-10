const express = require('express');
const router = express.Router();

const {
    getAllConcerts
} = require('../controllers/concertsController');

// routes
router.get('/', getAllConcerts);

module.exports = router;