const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbconnect'); // Adjust path as needed
const faqRoute = require('./routes/faqroutes'); // Fixed variable name
const userRoutes = require('./routes/userroutes');
const chatbotRoutes = require('./routes/chatbot'); // Renamed for clarity
const translatorRoutes = require('./routes/translator'); // Renamed for clarity

const app = express();

// Connect to MongoDB
dbConnect();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // To parse incoming request bodies in JSON format
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies (for forms)

// Routes
app.use('/api/user', userRoutes);
app.use('/api/faqs', faqRoute);
app.use('/api/chatbot', chatbotRoutes); // Fixed route path
app.use('/api/translate', translatorRoutes); // Fixed route path

// Define a test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Fixed string interpolation
});
