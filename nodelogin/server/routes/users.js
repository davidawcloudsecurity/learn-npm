const express = require('express');
const createUser = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const userData = req.body;
        const user = await createUser(userData);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
