import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import './index.css'


import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
     <QueryClientProvider client={queryClient}>
        <HelmetProvider>
        <FirebaseProvider>
  <RouterProvider router={router} />
  </FirebaseProvider>
  </HelmetProvider>
  </QueryClientProvider>

  </React.StrictMode>,
)
