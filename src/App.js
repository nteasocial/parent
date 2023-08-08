// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
// import { useEffect } from 'react';

function App() {
  let [first, setfirst] = useState(0);
  let [hovered, setHovered] = useState(false);
  window.addEventListener('message', (event) => {
    if (event.origin === 'https://main--childappsass.netlify.app/') {
      const receivedData = event.data;
      setfirst(receivedData.key[0])
      setHovered(receivedData.key[1])
     }
  });
  

  return (
    <div className="App">
      This is a parent
      <h1>{first}</h1>
      <h2>{hovered}</h2>
      <iframe title='webpage' src="https://main--childappsass.netlify.app/"></iframe>
    </div>
  );
}

export default App;
