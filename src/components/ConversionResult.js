import React from "react";
import { currencies } from "./CurrencyForm";

const ConversionResult = ({ result, currency }) => {
    const symbol = currencies.find((curr)=> curr.code === currency)?.sym;
  return (
    <div className="conversion-result">
      {result && <p>Wynik: {result} {symbol}</p>}
    </div>
  );
};

export default ConversionResult;
