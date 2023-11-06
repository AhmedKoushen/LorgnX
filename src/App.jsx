//import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='About'></Route>
          <Route path='services'></Route>
          <Route path='contact'></Route >
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
