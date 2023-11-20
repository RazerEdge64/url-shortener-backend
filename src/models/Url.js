const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    longUrl: String,
    shortUrl: String,
    createdAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Url', urlSchema);
