const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Example functions for user registration and login
exports.registerUser = async (req, res) => {
    // Implement user registration logic
};

exports.loginUser = async (req, res) => {
    // Implement user login logic
};

exports.getUserHistory = async (req, res) => {
    const { userId } = req.params;
    try {
        const urls = await Url.find({ userId });
        res.json(urls);
    } catch (error) {
        res.status(500).send("Error retrieving user history");
    }
};
