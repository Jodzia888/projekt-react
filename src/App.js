import React, { useState } from "react";
import axios from "axios";
import CurrencyForm from "./components/CurrencyForm";
import ConversionResult from "./components/ConversionResult";
import './App.css';

const apiKey = "c080d1faefb5c57774b34bdf";

const App = () => {
  const [conversionResult, setConversionResult] = useState(null);
  const [currency, setCurrency] = useState('')

  const handleConvert = async (amount, fromCurrency, toCurrency) => {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;
    setCurrency(toCurrency)
    try {
      const response = await axios.get(url);
      const rates = response.data.conversion_rates;

      if (rates[toCurrency]) {
        const result = (amount * rates[toCurrency]).toFixed(2);
        setConversionResult(result);
      } else {
        setConversionResult("Nie znaleziono kursu dla wybranej waluty.");
      }
    } catch (error) {
      console.error("Błąd podczas przeliczania walut:", error);
      setConversionResult("Wystąpił błąd podczas pobierania danych.");
    }
  };

  return (
    <div className="app-container">
      <h1>Przelicznik Walut</h1>
      <CurrencyForm onConvert={handleConvert} />
      <ConversionResult result={conversionResult} currency={currency}/>
    </div>
  );
};

export default App;
