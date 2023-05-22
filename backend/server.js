const app = require("./app");
const dotenv = require('dotenv');
const cloudinary = require("cloudinary");
const connectDatabase = require('./config/database')

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});


// Config
dotenv.config({ path: "backend/config/config.env" });

// Connecting Database
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    max_file_size: 5000000
  });
  

app.listen(process.env.PORT, () => {
    console.log("Server listening on port " + process.env.PORT)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});
