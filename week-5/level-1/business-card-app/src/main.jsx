import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { CreateCard } from './components/CreateCard.jsx';
import { ErrorPage } from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement:<ErrorPage/>
  },
  {
    path:"/create",
    element:<CreateCard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
