import React, { useState, useEffect } from "react";
import {
  getAllFaqs,
  createFaq,
  updateFaq,
  deleteFaq,
} from "../services/faqService";

const FaqCrud = () => {
  const [faqs, setFaqs] = useState([]);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });
  const [editingFaqId, setEditingFaqId] = useState(null);
  const [userId, setUserId] = useState(null); // To store logged-in user ID

  // Fetch user ID from local storage or another authentication method
  useEffect(() => {
    const fetchUserId = () => {
      const token = localStorage.getItem('authToken');
      // You might need a separate API to get user info from the token
      // Assuming user ID is stored in token or fetched from user profile endpoint
      // Set userId here based on the authentication method you use
      setUserId(/* logic to fetch user ID */);
    };

    fetchUserId();
  }, []);

  // Fetch all FAQs when component mounts
  useEffect(() => {
    const fetchFaqs = async () => {
      const data = await getAllFaqs();
      setFaqs(data);
    };
    fetchFaqs();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission for both create and update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingFaqId) {
      // Update the existing FAQ
      await updateFaq(editingFaqId, formData);
      setEditingFaqId(null);
    } else {
      // Create a new FAQ
      await createFaq(formData);
    }
    setFormData({ question: "", answer: "" });
    const updatedFaqs = await getAllFaqs();
    setFaqs(updatedFaqs);
  };

  // Handle editing an existing FAQ
  const handleEdit = (faq) => {
    setFormData({
      question: faq.question,
      answer: faq.answer,
    });
    setEditingFaqId(faq._id);
  };

  // Handle deleting an FAQ
  const handleDelete = async (id) => {
    await deleteFaq(id);
    const updatedFaqs = await getAllFaqs();
    setFaqs(updatedFaqs);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">FAQ Management</h1>

      {/* Form for creating/updating FAQ */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">{editingFaqId ? "Update FAQ" : "Create FAQ"}</h2>
        <div className="mb-4">
          <label htmlFor="question" className="block text-gray-700 font-medium mb-1">
            Question
          </label>
          <input
            type="text"
            id="question"
            name="question"
            value={formData.question}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block text-gray-700 font-medium mb-1">
            Answer
          </label>
          <input
            type="text"
            id="answer"
            name="answer"
            value={formData.answer}
            onChange={handleInputChange}
            className="border border-gray-300 p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition-colors duration-300"
        >
          {editingFaqId ? "Update FAQ" : "Create FAQ"}
        </button>
      </form>

      {/* List of all FAQs */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ List</h2>
      <ul className="space-y-4">
        {faqs.map((faq) => (
          <li key={faq._id} className="bg-white border border-gray-300 p-4 rounded-lg shadow-md">
            <div className="text-lg font-semibold text-gray-800">Q: {faq.question}</div>
            <div className="text-gray-700 mt-2">A: {faq.answer}</div>
            {/* Conditionally render Edit and Delete buttons */}
            {userId === faq.owner && (
              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-yellow-500 text-white py-1 px-3 rounded-md shadow hover:bg-yellow-600 transition-colors duration-300"
                  onClick={() => handleEdit(faq)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-md shadow hover:bg-red-600 transition-colors duration-300"
                  onClick={() => handleDelete(faq._id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqCrud;
