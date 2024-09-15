const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbconnect'); // Adjust path as needed
const chatbot = require('./routes/chatbot')
const faqroute = require("./routes/faqroutes")
const userRoutes = require("./routes/userroutes")
const translateText = require('./routes/translator')


const app = express();

// Connect to MongoDB
dbConnect();
app.use(cors({
  origin: 'https://fruiet.onrender.com/', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow necessary HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow necessary headers
}));

// app.use(cors(corsOptions));
// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // To parse incoming request bodies in JSON format
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies (for forms)

// Routes
app.use('/api/user',userRoutes);
app.use('/api/faqs',faqroute)
app.use("/api/user",chatbot)
app.use("/api/user",translateText);

// Define a test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
