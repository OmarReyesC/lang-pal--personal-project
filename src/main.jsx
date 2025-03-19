import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import Layout from './Pages/Layout.jsx';
import Home from './Pages/Home.jsx';
import LiveClasses from './Pages/LiveClasses.jsx';
import LiveClass from './Pages/LiveClass.jsx';
import MyLearning from './Pages/MyLearning/MyLearning.jsx';
import MyClasses from './Pages/MyLearning/MyClasses.jsx'
import Review from './Pages/MyLearning/Review.jsx';
import Games from './Pages/MyLearning/Games.jsx';
import PreviousClass from './Pages/MyLearning/PreviousClass.jsx';
import PreviousClassDescription from './Pages/MyLearning/PreviousClassDescription.jsx';
import PreviousClassInstructor from './Pages/MyLearning/PreviousClassInstructor.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>} />

          <Route path='live-classes' element={<LiveClasses/>} />
          <Route path='live-classes/:classId' element={<LiveClass/>} />

          <Route path='my-learning' element={<MyLearning />} >
            <Route index element={<Review/>} />

            <Route path='my-classes' element={<MyClasses/>} />
            <Route path='my-classes/:classId' element={<PreviousClass/>} >
              <Route index element={<PreviousClassDescription />} />
              <Route path='instructor' element={<PreviousClassInstructor />} />
            </Route>

            <Route path='games' element={<Games/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
