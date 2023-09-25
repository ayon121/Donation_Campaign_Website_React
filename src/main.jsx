import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import DonationDetails from './Components/Donation_Details/DonationDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [ 
      {
        path: '/',
        element : <Home></Home>,
        loader : () => fetch('../public/data.json')
      },
      {
        path : '/donation',
        element : <div>Donations</div>
      },
      {
        path : '/donation_details/:id',
        element : <DonationDetails></DonationDetails>,
        loader : () => fetch('../public/data.json')

      },
      {
        path : '/statistics',
        element : <div>Statistics</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
