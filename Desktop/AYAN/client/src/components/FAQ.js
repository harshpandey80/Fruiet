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
    <div className="container mt-20 mx-auto p-8 bg-gradient-to-br from-green-100 to-blue-200 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">FAQ Management</h1>

      {/* Form for creating/updating FAQ */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200 mb-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">{editingFaqId ? "Update FAQ" : "Create FAQ"}</h2>
        <div className="mb-6">
          <label htmlFor="question" className="block text-gray-700 text-lg font-medium mb-2">
            Question
          </label>
          <input
            type="text"
            id="question"
            name="question"
            value={formData.question}
            onChange={handleInputChange}
            className="border border-gray-300 p-4 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 placeholder-gray-400"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="answer" className="block text-gray-700 text-lg font-medium mb-2">
            Answer
          </label>
          <input
            type="text"
            id="answer"
            name="answer"
            value={formData.answer}
            onChange={handleInputChange}
            className="border border-gray-300 p-4 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 placeholder-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          {editingFaqId ? "Update FAQ" : "Create FAQ"}
        </button>
      </form>

      {/* List of all FAQs */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">FAQ List</h2>
      <ul className="space-y-6">
        {faqs.map((faq) => (
          <li key={faq._id} className="bg-white border border-gray-300 p-6 rounded-lg shadow-md flex flex-col space-y-4">
            <div className="text-lg font-semibold text-gray-800">Q: {faq.question}</div>
            <div className="text-gray-700">A: {faq.answer}</div>
            {/* Conditionally render Edit and Delete buttons */}
            {userId === faq.owner && (
              <div className="flex space-x-4 mt-4">
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
                  onClick={() => handleEdit(faq)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
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
