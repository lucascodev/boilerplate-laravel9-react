import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

if (document.getElementById('root')) {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App />
    )
}
