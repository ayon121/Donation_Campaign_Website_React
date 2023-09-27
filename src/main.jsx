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
import GivenDonations from './Components/Given_Donations/GivenDonations';
import Statistics from './Components/Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [ 
      {
        path: '/',
        element : <Home></Home>,
        loader : () => fetch('data.json')
      },
      {
        path : '/donation',
        element : <GivenDonations></GivenDonations>,
        loader : () => fetch('data.json')
        
      },
      {
        path : '/donation_details/:id',
        element : <DonationDetails></DonationDetails>,
        loader : () => fetch('data.json')

      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>,
        loader : () => fetch('data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
