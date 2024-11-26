import React, { useState } from "react";


export const currencies = [
    { code: "USD", name: "Dolar amerykański", flag: "https://flagcdn.com/w40/us.png" , sym: '$' },
    { code: "EUR", name: "Euro", flag: "https://flagcdn.com/w40/eu.png", sym: '€' },
    { code: "PLN", name: "Polski złoty", flag: "https://flagcdn.com/w40/pl.png", sym: 'zł' },
    { code: "GBP", name: "Funt brytyjski", flag: "https://flagcdn.com/w40/gb.png", sym: '£' },
    { code: "JPY", name: "Jen japoński", flag: "https://flagcdn.com/w40/jp.png", sym: '¥' },
  ];

const CurrencyForm = ({ onConvert }) => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && fromCurrency && toCurrency) {
      onConvert(amount, fromCurrency, toCurrency);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Kwota:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Wprowadź kwotę"
          required
        />
      </div>

      <div className="dropdown">
        <label htmlFor="fromCurrency">Z waluty:</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
        <img
          src={currencies.find((c) => c.code === fromCurrency)?.flag}
          alt={fromCurrency}
          className="flag-container"
        />
      </div>

      <div className="dropdown">
        <label htmlFor="toCurrency">Na walutę:</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
        <img
          src={currencies.find((c) => c.code === toCurrency)?.flag}
          alt={toCurrency}
          className="flag-container"
        />
      </div>

      <button type="submit">Przelicz</button>
    </form>
  );
};

export default CurrencyForm;
