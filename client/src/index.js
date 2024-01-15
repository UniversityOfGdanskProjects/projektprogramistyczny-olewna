import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './store/store.js';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { CocktailsProvider } from './context/CocktailsProvider.js'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = createStore(reducer);

root.render(
  <StrictMode>
    <CocktailsProvider>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </CocktailsProvider>
  </StrictMode>
);
