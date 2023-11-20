const Url = require('../models/Url');
const shortid = require('shortid');

exports.shortenUrl = async (req, res) => {
    const { longUrl, customShortUrl, userId } = req.body;

    let shortUrl = customShortUrl;
    if (!shortUrl) {
        shortUrl = shortid.generate();
    }

    try {
        // Ensure short URL is unique
        let existingUrl = await Url.findOne({ shortUrl });
        if (existingUrl) {
            return res.status(400).json({ message: "Short URL already in use" });
        }

        const url = new Url({ longUrl, shortUrl, userId });
        await url.save();
        res.json(url);
    } catch (error) {
        res.status(500).json({ message: "Error creating shortened URL" });
    }
};


exports.redirectToLongUrl = async (req, res) => {
    const { shortUrl } = req.params;

    try {
        const url = await Url.findOne({ shortUrl });
        if (!url) {
            return res.status(404).json({ message: "URL not found" });
        }

        res.redirect(url.longUrl);
    } catch (error) {
        res.status(500).json({ message: "Error redirecting to URL" });
    }
};
