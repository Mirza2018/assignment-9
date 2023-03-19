import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Reviews from './component/Reviews/Reviews';
import Dashboard from './component/Dashboard/Dashboard';
import Blogs from './component/Blogs/Blogs';
import About from './component/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <Home></Home>,
          loader: () => fetch('reviews.json')
        },
        {
          path: '/reviews', element: <Reviews></Reviews>,
          loader: () => fetch('reviews.json')
        },
        { path: '/dashboard', element: <Dashboard></Dashboard>,
        loader: () => fetch('data.json') },
        { path: '/blogs', element: <Blogs></Blogs> },
        { path: '/about', element: <About></About> }
      ]
    },
    { path: '*', element: <h1>404 not found page</h1> }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
