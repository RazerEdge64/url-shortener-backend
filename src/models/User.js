const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    tier: { type: Number, default: 1 } // default tier
});

module.exports = mongoose.model('User', userSchema);
