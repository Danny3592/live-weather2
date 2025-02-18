import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainHeader from './layout/MainHeader.jsx';
import Home from './pages/Home.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainHeader />,
    children: [{ index: true, element: <Home /> }],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>,
);
