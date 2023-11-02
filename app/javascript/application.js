// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return (
    <>
      <h1>Hello World! from React Component</h1>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
