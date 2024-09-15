import React, { useState } from 'react';

const Translator = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('es'); // Default to Spanish
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:2000/api/user/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, language }),
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const result = await response.json();
      setTranslatedText(result.translation);
    } catch (error) {
      setError('Failed to translate text');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-200 p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-50"></div> {/* Background gradient overlay */}
      <div className="relative w-full max-w-2xl bg-white shadow-xl rounded-xl p-8 space-y-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 transition-transform duration-300 ease-in-out hover:scale-105">
          Translator
        </h1>
        <textarea
          rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to translate"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300 ease-in-out"
        />
        <div className="mb-6">
          <label htmlFor="language" className="block text-gray-800 font-semibold mb-2 transition-colors duration-300 ease-in-out hover:text-blue-600">
            Select Language
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300 ease-in-out"
          >
            {/* Add more language options as needed */}
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ar">Arabic</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="pa">Punjabi</option>
            <option value="ms">Malay</option>
            <option value="tl">Tagalog</option>
            <option value="vi">Vietnamese</option>
            <option value="th">Thai</option>
            <option value="tr">Turkish</option>
            <option value="he">Hebrew</option>
            <option value="sv">Swedish</option>
            <option value="no">Norwegian</option>
            <option value="da">Danish</option>
            <option value="fi">Finnish</option>
            <option value="pl">Polish</option>
            <option value="cs">Czech</option>
            <option value="hu">Hungarian</option>
            <option value="ro">Romanian</option>
            <option value="sk">Slovak</option>
            <option value="bg">Bulgarian</option>
            <option value="hr">Croatian</option>
            <option value="sr">Serbian</option>
            <option value="sl">Slovenian</option>
            <option value="lt">Lithuanian</option>
            <option value="lv">Latvian</option>
            <option value="et">Estonian</option>
          </select>
        </div>
        <button
          onClick={handleTranslate}
          disabled={loading}
          className={`w-full py-3 px-6 rounded-lg text-white font-semibold ${loading ? 'bg-gray-500' : 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800'} transition-all duration-300 ease-in-out shadow-md hover:shadow-lg`}
        >
          {loading ? 'Translating...' : 'Translate'}
        </button>
        {error && <p className="mt-4 text-red-500 text-center font-medium transition-opacity duration-300 ease-in-out">{error}</p>}
        {translatedText && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Translated Text:</h2>
            <p className="text-gray-700">{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
