import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { SignInProvider } from './Context/signedin';
import { RescuesProvider } from './Context/RescueContext'
import { PetsProvider } from './Context/PetsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdoptersProvider } from './Context/AdopterContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <SignInProvider>
    <RescuesProvider>
    <AdoptersProvider>
    <PetsProvider>
    <App />
    </PetsProvider>
    </AdoptersProvider>
    </RescuesProvider>
    </SignInProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
