import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <HelmetProvider>
        <FirebaseProvider>
  <RouterProvider router={router} />
  </FirebaseProvider>
  </HelmetProvider>
  </React.StrictMode>,
)
