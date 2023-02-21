import React, { useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import messages from './messages';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [locale, setLocale] = useState(navigator.language);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleLanguageChange = (event) => {
    setLocale(event.target.value);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <button onClick={handleButtonClick}>
          <FormattedMessage id='clickMe' />
        </button>
        <p>
          <FormattedMessage
            id='count'
            value={{ count: count }}
          />
        </p>
        <div>
          <label htmlFor='languageSelect'>Language:</label>
          <select id='languageSelect' value={locale} onChange={handleLanguageChange}>
            <option value='en'>English</option>
            <option value='es'>Espanol</option>
          </select>
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
