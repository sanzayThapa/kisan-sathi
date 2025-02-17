import "../styles/contact.css";
import React, { useState, useEffect } from 'react';

function IframeComponent({ onClose }) {
  return (
    <div className="iframe-overlay">
      <iframe
        src="http://127.0.0.1:5000/weather"
        frameBorder="0"
        id="iframe"
        className="iframe-content" 
      />
      <button className="close-button" onClick={onClose}>
        
      </button>
    </div>
  );
}

function App() {
  const [iframeVisible, setIframeVisible] = useState(false);

  const openFrame = () => {
    setIframeVisible(true);
  };

  const closeFrame = () => {
    setIframeVisible(false);
  };

  useEffect(() => {
    // Automatically open the iframe when the component mounts
    setIframeVisible(true);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* You can remove the button to manually open the iframe */}
      </header>
      {iframeVisible && (
        <div className="iframe-container2"> 
          <IframeComponent onClose={closeFrame} />
        </div>
      )}
    </div>
  );
}

export default App;



