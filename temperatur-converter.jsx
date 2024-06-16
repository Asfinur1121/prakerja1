import React, { useState } from 'react';

const TemperaturConverter = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState('');

  const convertToC = () => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    setCelsius(celsius.toFixed(2));
  };

  return (
    <section id="temperatur-converter">
      <h2>Konverter Suhu</h2>
      <label htmlFor="fahrenheit">Fahrenheit:</label>
      <input
        type="number"
        id="fahrenheit"
        step="0.01"
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
      />
      <button onClick={convertToC}>Konversi ke Celcius</button>
      <p id="celsius-result">{celsius} °C</p>
    </section>
  );
};

export default TemperaturConverter;