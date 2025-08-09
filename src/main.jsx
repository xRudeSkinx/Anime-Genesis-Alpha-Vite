import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Gencore from './modules/Gencore.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gencore" element={<Gencore />} />
    </Routes>
  </HashRouter>
)

