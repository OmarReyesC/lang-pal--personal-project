import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import Layout from './Pages/Layout.jsx';
import Home from './Pages/Home.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
