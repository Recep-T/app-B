import React, { useState } from 'react';
import logo from './logo.svg'; // Assuming you have a logo.svg in your project

function App() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ff6b6b',
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <header className="App-header" style={{ marginBottom: '40px' }}>
        <p>
          APP - B
        </p>
        <h1>Counter: {count}</h1>
        <div>
          <button style={buttonStyle} onClick={() => setCount(count + 1)}>Increase</button>
          <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrease</button>
          <button style={resetButtonStyle} onClick={() => setCount(0)}>Reset</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#61dafb', textDecoration: 'none', marginTop: '20px' }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
