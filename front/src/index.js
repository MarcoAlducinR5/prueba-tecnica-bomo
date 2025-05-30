import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Inclusion de CORS para evitar problemas con consumo de servicios API REST
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
cors(corsOptions);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
