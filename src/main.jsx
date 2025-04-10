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
import MyClasses, {myClassesLoader} from './Pages/MyLearning/MyClasses.jsx'
import Review from './Pages/MyLearning/Review.jsx';
import Games from './Pages/MyLearning/Games.jsx';
import PreviousClass, {previousClassLoader} from './Pages/MyLearning/PreviousClass.jsx';
import PreviousClassDescription from './Pages/MyLearning/PreviousClassDescription.jsx';
import PreviousClassInstructor from './Pages/MyLearning/PreviousClassInstructor.jsx';
import Login, {loginLoader, action as loginAction} from './Pages/Login.jsx';
import App from './App.jsx';
import NotFound from './Pages/NotFound.jsx';
import Error from './Pages/Error.jsx';

import './server.js';
import { requireAuth } from './utils.js';

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
        loader: ({ params }) => { 
          return { liveClassPromise: liveClassLoader(params)}
        },
        errorElement: <Error />
      },

      {
        path: 'my-learning',
        element: <MyLearning />,
        loader: requireAuth,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Review />,
            loader: requireAuth,
          },

          {
            path: 'my-classes', 
            element:<MyClasses/>,
            loader: myClassesLoader
          },
          {
            path: 'my-classes/:classId', 
            element:<PreviousClass/>,
            loader: previousClassLoader,
            children: [
              {
                index: true,
                element: <PreviousClassDescription />,
                loader: requireAuth,
              },
              {
                path: 'instructor',
                element: <PreviousClassInstructor />,
                loader: requireAuth,
              }
            ]
          },

          {
            path: 'games',
            element: <Games/>,
            loader: requireAuth,
          }
        ]
      },

      {
        path: 'login', 
        element: <Login />,
        loader: loginLoader,
        action: loginAction
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
