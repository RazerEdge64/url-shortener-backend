# URL Shortener Service (Backend)

## Overview
This URL Shortener Service is a robust and scalable backend system designed for efficient URL management. It provides functionalities for shortening long URLs, managing URL histories, and redirecting short URLs to their original destinations. This project uses the MERN stack, focusing on MongoDB, Express.js, and Node.js for the backend.

## Features
- **URL Shortening**: Converts long URLs into short, manageable links.
- **Custom URL Option**: Users can create custom short URLs.
- **User History**: Track and retrieve the history of URLs shortened by a user.
- **Tier-based Rate Limiting**: Implements different request limits for different user tiers.
- **Redirecting Short URLs**: Short URLs effectively redirect to their original long URLs.

## Tech Stack
- **MongoDB**: NoSQL database to store URL and user data.
- **Express.js and Node.js**: For creating the server and handling API requests.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Additional Libraries**: `dotenv` for environment variables, `bcryptjs` for password hashing, `jsonwebtoken` for handling JWTs, `express-rate-limit` for rate limiting.

## Folder Structure
/url-shortener-backend\
|-- /node_modules\
|-- /src\
| |-- /config\
| |-- /controllers\
| | |-- urlController.js\
| | | -- userController.js\ 
| |-- /models \
| | |-- Url.js\
| | | -- User.js\
| |-- /routes\
| | |-- urlRoutes.js\
| | | -- userRoutes.js\
| |-- /middleware\
| |-- /utils\
| -- app.js\
|-- .env\
|-- .gitignore\
|-- package.json\
|-- package-lock.json\
-- README.md\


## API Endpoints
- **POST `/api/urls/shorten`**: Shorten a long URL.
- **GET `/api/urls/:shortUrl`**: Redirect to the original URL from a short URL.
- **GET `/api/users/:userId/history`**: Retrieve the history of URLs shortened by a user.
- **(Additional endpoints for user authentication and custom URL functionality)**

## Approach
- **Modular Design**: Separation of concerns achieved through a structured folder layout.
- **Scalability**: Database schema and API design cater to scaling needs.
- **Security and Rate Limiting**: Implementation of basic security practices and tier-based rate limiting for API requests.
- **User-Friendly Features**: Custom URL option and easy retrieval of user URL history.

## Contributing
Contributions to enhance the project are welcome. Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

