import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/navbar/nav.jsx';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Users from './components/footer/users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav></Nav>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      }
      
    ]
  }
  // {
  //   path: '/about',
  //   element: <div>I am in the about page</div>
  // },
  // // {
  // //   path: '/contact',
  // //   element: <div>Call me and contact us</div>
  // // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App></App> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
