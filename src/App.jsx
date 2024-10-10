import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import BlogDetail from './Pages/Blogs/BlogDetail';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home';
import Payment from './Pages/Payment/Payment';
import TakeTest from './Pages/TakeTest/index';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/takeTest',
      element: <TakeTest />,
    },
    {
      path: '/Payment',
      element: <Payment />,
    },
    {
      path: '/blogs',
      element: <Blogs />,
    },
    {
      path: '/blogs/blogdetails/:data',
      element: <BlogDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
