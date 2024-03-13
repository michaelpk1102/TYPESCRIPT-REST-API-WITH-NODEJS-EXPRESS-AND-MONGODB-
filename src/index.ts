import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { MongoClient } from "mongodb";
import router from "./router"; // Corrected router import
import mongoose from "mongoose";

// Create Express app
const app = express();

// Middleware setup
app.use(cors({
    credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', router); // Use router as middleware

// Create HTTP server
const server = http.createServer(app);

// Start server listening
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});

// MongoDB connection setup
const MONGODB_URI = 'mongodb://localhost:27017'; // Corrected MongoDB URI
const client = new MongoClient(MONGODB_URI);

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        // Now you can use the client to interact with the database
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();
