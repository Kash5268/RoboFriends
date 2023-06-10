import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './Robots';


ReactDOM.createRoot(document.getElementById('Card')).render(
  <App robots={robots} />
)

reportWebVitals();
