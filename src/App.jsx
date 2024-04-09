import React, { useState } from "react";

export function App(props) {
  const [primeNumber, setPrimeNumber] = useState("Haz clic para generar");
  console.log({ number: primeNumber });

  const isPrime = (number) => {
    for (let i = 2, root = Math.sqrt(number); i <= root; i++) {
      if (number % i === 0) return false;
    }
    return number > 1;
  };

  const ramdom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generator = () => {
    let candidate = ramdom(2, 200);
    if (!isPrime(candidate)) {
      candidate = ramdom(2, 200);
    }
    return candidate;
  };

  const showPrimeNumber = () => {
    setPrimeNumber(generator());
  };

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={showPrimeNumber}>Ramdom number </button>
      <p>Number: {primeNumber}</p>
    </div>
  );
}
export default App;
