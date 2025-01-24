import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import Board from './pages/Board.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import EditTicket from './pages/EditTicket.tsx';
import CreateTicket from './pages/CreateTicket.tsx';
import Login from './pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: localStorage.getItem('token') ? <Board /> : <Navigate to="/login" />,
      }, 
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/edit',
        element: localStorage.getItem('token') ? <EditTicket /> : <Navigate to="/login" />,
      },
      {
        path: '/create',
        element: localStorage.getItem('token') ? <CreateTicket /> : <Navigate to="/login" />,
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
