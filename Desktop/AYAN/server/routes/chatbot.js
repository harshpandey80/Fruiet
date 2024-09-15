const express = require("express");
const { OpenAI } = require("openai");
require("dotenv").config(); // Ensure dotenv is loaded before using environment variables

const router = express.Router();

// Initialize OpenAI API with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST route to handle chatbot interactions
router.post("/ask", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // Make sure to use correct method and parameters
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: message }
      ],
      temperature: 0.7,
    });

    // Log the entire response to debug
    console.log("OpenAI API response:", response);

    // Check if `choices` exists in the response
    if (response && response.choices && response.choices.length > 0) {
      const reply = response.choices[0].message.content.trim();
      return res.json({ reply });
    } else {
      throw new Error("Unexpected response format from OpenAI API");
    }
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ error: "Failed to fetch response from OpenAI" });
  }
});

module.exports = router;
