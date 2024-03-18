import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root';
import Error404 from './components/Pages/Error404';
import Home from './components/Pages/Home';
import AuthProvider from './components/providers/AuthProvider';
import Contact from './components/Pages/Contact';
import Service from './components/Pages/Service';
import About from './components/Pages/About';




import LeadershipTeam from './components/Pages/About/LeadershipTeam'
import Certifications from './components/Pages/About/Certifications';
import History from './components/Pages/About/History'
import Company from './components/Pages/About/OurCompany'
import Projects from './components/Pages/Projects';
import Details from './components/Pages/DetailsProjects'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/contact',
        element:<Contact></Contact>
        
      },
      {
        path:'/service',
        element:<Service></Service>
        
      },
      {
        path:'/about',
        element:<About></About>
        
      },
      {
        path:'/certifications',
        element:<Certifications></Certifications>
        
      },
      {
        path:'/team',
        element:<LeadershipTeam></LeadershipTeam>
        
      },
      {
        path:'/history',
        element:<History></History>
        
      },
      {
        path:'/company',
        element:<Company></Company>
        
      },
      {
        path:'/projects',
        element:<Projects></Projects>
        
      },
      {
        path:'projects/:id',
        element:<Details></Details>
      }

      
      
       
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
      </HelmetProvider>
      </React.StrictMode>,
)
