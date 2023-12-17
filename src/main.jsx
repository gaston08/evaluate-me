import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'src/main.css';

import Quizz from 'src/pages/Quizz.jsx';

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Quizz />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);