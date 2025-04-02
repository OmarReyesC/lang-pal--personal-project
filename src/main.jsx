import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter, 
  RouterProvider,
} from 'react-router';
import './index.css';
import Layout from './Pages/Layout.jsx';
import Home from './Pages/Home.jsx';
import LiveClasses, {liveClassesLoader} from './Pages/LiveClasses.jsx';
import LiveClass, {liveClassLoader} from './Pages/LiveClass.jsx';
import MyLearning from './Pages/MyLearning/MyLearning.jsx';
import MyClasses from './Pages/MyLearning/MyClasses.jsx'
import Review from './Pages/MyLearning/Review.jsx';
import Games from './Pages/MyLearning/Games.jsx';
import PreviousClass from './Pages/MyLearning/PreviousClass.jsx';
import PreviousClassDescription from './Pages/MyLearning/PreviousClassDescription.jsx';
import PreviousClassInstructor from './Pages/MyLearning/PreviousClassInstructor.jsx';
import Login from './Pages/Login.jsx';
import App from './App.jsx';
import NotFound from './Pages/NotFound.jsx';
import Error from './Pages/Error.jsx';

import './server.js';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: 'live-classes',
        element: <LiveClasses />,
        loader: liveClassesLoader,
        errorElement: <Error />
      },
      {
        path: 'live-classes/:classId',
        element: <LiveClass />,
        loader: liveClassLoader,
      },

      {
        path: 'my-learning',
        element: <MyLearning />,
        children: [
          {
            index: true,
            element: <Review />
          },

          {
            path: 'my-classes', 
            element:<MyClasses/>
          },
          {
            path: 'my-classes/:classId', 
            element:<PreviousClass/>,
            children: [
              {
                index: true,
                element: <PreviousClassDescription />
              },
              {
                path: 'instructor',
                element: <PreviousClassInstructor />
              }
            ]
          },

          {
            path: 'games',
            element: <Games/>
          }
        ]
      },

      {
        path: 'login', 
        element: <Login />
      },

      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
