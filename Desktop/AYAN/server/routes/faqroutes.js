const express = require("express");
const Faq = require("../models/FaqSchema"); // Adjust path as needed
const { authenticateUser } = require("../middleware/authenticateUser"); // Adjust path as needed

const router = express.Router();

// Get all FAQs
router.get("/", async (req, res) => {
  try {
    const faqs = await Faq.find().populate("userId", "username"); // Populate the username of the creator
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch FAQs" });
  }
});

// Create a new FAQ (only logged-in users)
router.post("/", authenticateUser, async (req, res) => {
  const { question, answer } = req.body;
  const userId = req.user._id; // Get logged-in user's ID

  try {
    const newFaq = new Faq({
      question,
      answer,
      userId,
    });

    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    res.status(500).json({ message: "Failed to create FAQ" });
  }
});

// Update a FAQ (only by the creator)
router.put("/:id", authenticateUser, async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  const userId = req.user._id;

  try {
    const faq = await Faq.findById(id);
    
    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" });
    }
    if (faq.userId.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ message: "You can only update your own FAQs" });
    }

    faq.question = question;
    faq.answer = answer;

    await faq.save();
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: "Failed to update FAQ" });
  }
});

// Delete a FAQ (only by the creator)
// Delete a FAQ (only by the creator)
router.delete("/:id", authenticateUser, async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id; // Ensure you're using _id correctly
  
    try {
      const faq = await Faq.findById(id);
      if (!faq) {
        return res.status(404).json({ message: "FAQ not found" });
      }
  
      // Verify if the current user is the owner of the FAQ
      if (faq.userId.toString() !== userId.toString()) {
        return res.status(403).json({ message: "You can only delete your own FAQs" });
      }
  
      await Faq.findByIdAndDelete(id);
      
  
      res.json({ message: "FAQ deleted" });
    } catch (error) {
      console.error('Error deleting FAQ:', error); // Log the full error for debugging
      res.status(500).json({ message: "Failed to delete FAQ" });
    }
  });
  
module.exports = router;
