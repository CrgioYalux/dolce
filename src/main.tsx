import React from 'react';
import ReactDOM from 'react-dom/client';
import ProvidersWrapper from './components/ProvidersWrapper';
import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  </React.StrictMode>,
);
