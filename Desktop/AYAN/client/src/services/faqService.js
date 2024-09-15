const API_URL = 'http://localhost:2000/api/faqs'; // Adjust according to your backend URL

// Helper function to get the token from local storage
const getAuthToken = () => localStorage.getItem('authToken');

export const getAllFaqs = async () => {
  const token = getAuthToken(); // Fetch the token from local storage

  try {
    const response = await fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the request headers
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error; // or handle the error accordingly
  }
};

export const createFaq = async (faqData) => {
  const token = getAuthToken(); // Fetch the token from local storage

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the request headers
      },
      body: JSON.stringify(faqData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating FAQ:', error);
    throw error; // or handle the error accordingly
  }
};

export const updateFaq = async (id, faqData) => {
  const token = getAuthToken(); // Fetch the token from local storage

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the request headers
      },
      body: JSON.stringify(faqData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating FAQ:', error);
    throw error; // or handle the error accordingly
  }
};

export const deleteFaq = async (id) => {
  const token = getAuthToken(); // Fetch the token from local storage

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the request headers
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    throw error; // or handle the error accordingly
  }
};
