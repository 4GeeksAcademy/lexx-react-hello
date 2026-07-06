import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
let counter = 0;

setInterval(() => {
  console.log(counter);
  root.render(
    <React.StrictMode>
      {/* Le pasamos el contador a Home a través de la prop 'tiempo' */}
      <Home tiempo={counter} />
    </React.StrictMode>
  );
  counter++;
}, 1000);
