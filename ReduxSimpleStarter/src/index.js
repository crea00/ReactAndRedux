import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyC2IkW42YkS2GnY_Afat6dbebKdL3c0F-w';

// Create a new component. This component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's HTML generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));