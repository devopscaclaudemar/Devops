import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Styles.module.css';

const apiKey = 'dbb9355d1bcfd83cf48fa3c0'
const ExchangeRates = ({ apiKey }) => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [error, setError] = useState(null);
  const [displayCurrencies, setDisplayCurrencies] = useState(['EUR', 'GBP', 'JPY', 'BRL', 'CHF']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}?access_key=${apiKey}`);
        setRates(response.data.rates);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [apiKey, baseCurrency]);

  const handleChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.currency}>
      <h1>Exchange Rates</h1>
      <label htmlFor="baseCurrency">Base Currency:</label>
      <select id="baseCurrency" value={baseCurrency} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <ul>
        {displayCurrencies.map((currency) => (
          <p key={currency}>
            {currency}: {rates[currency] || 'N/A'}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default ExchangeRates;