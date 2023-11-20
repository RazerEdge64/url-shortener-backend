const rateLimit = require('express-rate-limit');
const User = require('../models/User');

const getUserRateLimit = (userId) => {
    // Example logic to determine rate limits based on user tier
    return User.findById(userId).then(user => {
        if (user.tier === 2) {
            return { windowMs: 15 * 60 * 1000, max: 200 };
        } else {
            return { windowMs: 15 * 60 * 1000, max: 100 };
        }
    });
};

const dynamicLimiter = async (req, res, next) => {
    const userId = req.user.id; // Assuming user ID is available in req.user
    const limits = await getUserRateLimit(userId);

    return rateLimit({
        windowMs: limits.windowMs,
        max: limits.max,
        message: "Too many requests, please try again later."
    })(req, res, next);
};

module.exports = dynamicLimiter;
