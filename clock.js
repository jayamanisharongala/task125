import React from 'react';
import ReactDOM from 'react-dom';
function clock() {
    const element = (
        <h2> {new Date().toLocaleTimeString()}</h2>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(clock, 1000);
