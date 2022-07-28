import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line
import App from './App.jsx';

// eslint-disable-next-line
const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));
