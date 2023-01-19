import axios from 'axios';
import React, { useState, useEffect } from 'react';

export function Stars({ rating, id }) {
  const [rates, setRates] = useState(rating);

  const calculateRate =
    rates.length > 0
      ? parseFloat(rates.reduce((a, b) => a + b, 0) / rates.length).toFixed(1)
      : 0;

  const [rate, setRate] = useState(calculateRate);

  function handleClick(x) {
    setRates((prev) => [...prev, x]);
    rating.push(x);
    axios.patch(`/api/cocktails/${id}`,{rating:rating})
  }

  useEffect(() => {
    setRate(calculateRate);
  }, [rates]);

  return (
    <div className="stars">
      <div className="star-one" onClick={() => handleClick(1)}>
        {rate < 1 ? '☆' : '★'}
      </div>
      <div className="star-two" onClick={() => handleClick(2)}>
        {rate < 2 ? '☆' : '★'}
      </div>
      <div className="star-two" onClick={() => handleClick(3)}>
        {rate < 3 ? '☆' : '★'}
      </div>
      <div className="star-two" onClick={() => handleClick(4)}>
        {rate < 4 ? '☆' : '★'}
      </div>
      <div className="star-two" onClick={() => handleClick(5)}>
        {rate < 5 ? '☆' : '★'}
      </div>
    </div>
  );
}
