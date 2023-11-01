// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  return <h1>Hello World! from React Component</h1>;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
