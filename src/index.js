import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Productreducer from './reducers';
// import Productreducer from './Productreducer';

const store = configureStore({
    reducer: Productreducer
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </Provider>
);

reportWebVitals();
