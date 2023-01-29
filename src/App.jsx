import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Game from './views/game';
import Home from './views/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/game',
    element: <Game />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
