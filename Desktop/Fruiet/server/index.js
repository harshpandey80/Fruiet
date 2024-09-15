const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect'); // Adjust path as needed
const faqroute = require("./routes/faqroutes")
const app = express();

// Connect to MongoDB
dbConnect();
const userRoutes = require("./routes/userroutes")
// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // To parse incoming request bodies in JSON format
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies (for forms)
const chatbot = require('./routes/chatbot')
const translateText = require('./routes/translator')
app.use('/api/user',userRoutes);
app.use('/api/faqs',faqroute)
app.use("/api/user",chatbot)
app.use("/api/user",translateText);
// Define routes
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
