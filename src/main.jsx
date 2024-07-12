import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Sortpage from './pages/Sortpage.jsx';
import DetailNis from './pages/DetailNis.jsx'
import DetailKen from './pages/DetailKen.jsx'
import DetailRols from './pages/DetailRols.jsx'
import Payment from './pages/Payment.jsx'


const router = createBrowserRouter([
  {
    path: "/Morent",
    element: <App/>,
    children: [
      {
        path: "/Morent/sortpage",
        element: <Sortpage/>
      },
      {
        path: "/Morent/home",
        element: <Home/>
      },
      {
        path: "/Morent/detailnis",
        element: <DetailNis/>
      },
      {
        path: "/Morent/detailken",
        element: <DetailKen/>
      },
      {
        path: "/Morent/detailrols",
        element: <DetailRols/>
      },
      {
        path: "/Morent/payment",
        element: <Payment/>
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
