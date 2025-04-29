# Social Media Backend (Node.js + MySQL)

This is a backend API for a mini social media application, built with Node.js, Express, and MySQL.

## Features

- Create posts (supports hashtags like `#dev`)
- Like posts
- Follow users
- Search posts by hashtag

## Technologies

- Node.js
- Express.js
- MySQL
- Postman (for API testing)

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Configure your MySQL database in `db.js`.
4. Run `node index.js` to start the server.

Server will run at: `http://localhost:3001`

## Example API Endpoints

- `POST /posts`
- `POST /likes`
- `POST /follows`
- `GET /hashtags/search?keyword=yourtag`

---

## Author

Hoang Cao Phong
