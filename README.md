# MongoDB Albums App

A simple Node.js, Express, and MongoDB application that displays music albums from a MongoDB Atlas database.

## Features

- Connects to MongoDB Atlas using Mongoose
- Serves a homepage with Express
- Fetches album data from a REST API
- Displays albums in an HTML table
- Tested with MongoDB Compass and Postman

## Technologies Used

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Dotenv
- Nodemon

## Project Structure

- `app.js` - main server file
- `config/db.js` - MongoDB connection
- `models/album.js` - album model
- `routes/albumRoutes.js` - API routes
- `public/index.html` - frontend page
- `public/style.css` - styling

## Installation

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with:
   - `PORT=3000`
   - `CONNECTION_URL=your_mongodb_connection_url`
4. Run `npm run dev`

## API Endpoint

- `GET /api/albums` - get all albums
- `POST /api/albums` - create a new album

## What I practiced

- Connecting Node.js to MongoDB Atlas
- Creating a Mongoose model
- Building Express routes
- Serving static HTML with Express
- Fetching API data into the browser
- Testing data in Postman and MongoDB Compass