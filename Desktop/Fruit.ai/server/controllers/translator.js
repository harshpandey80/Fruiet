const { Configuration, OpenAI } = require("openai");
require("dotenv").config();

// Initialize OpenAI API with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


const translateText = async (req, res) => {
  const { text, language } = req.body;

  if (!text || !language) {
    return res.status(400).json({ error: "Text and language are required" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `Translate the following text to ${language}:` },
        { role: "user", content: text },
      ],
      temperature: 0.3,
    });
    console.log(response)
    
    const translatedText =response.choices[0].message.content.trim();
    res.json({ translation: translatedText });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ error: "Failed to fetch response from OpenAI" });
  }
};

module.exports = { translateText };
