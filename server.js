const express = require('express');
const path = require('path');

// Define the path to the 'public' directory
let initial_path = path.join(__dirname,"public");

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(initial_path));

// Route to serve the homepage from the 'uploads' folder
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
