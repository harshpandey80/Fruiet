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
      const response = await fetch('https://fruiet-2.onrender.com/api/user/translate', {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Translator</h1>
        <textarea
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to translate"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="mb-4">
          <label htmlFor="language" className="block text-gray-700 mb-2">Select Language</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
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
            {/* Add more languages as needed */}
          </select>
        </div>
        <button
          onClick={handleTranslate}
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
        >
          {loading ? 'Translating...' : 'Translate'}
        </button>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        {translatedText && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Translated Text:</h2>
            <p className="text-gray-800">{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
