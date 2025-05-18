import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      example: 'halimbawa',
      love: 'pagmamahal',
      cat: 'pusa',
      dog: 'aso'
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="container">
      <h1>English to Tagalog Translator</h1>
      <div className="input-group">
        <label>English Word:</label>
        <input
          type="text"
          value={englishWord}
          onChange={(e) => setEnglishWord(e.target.value)}
          placeholder="Type a word here"
        />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div className="result">
          <h2>Tagalog Translation:</h2>
          <p>{tagalogTranslation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
