import { Routes, Route, Outlet, Link, Navigate } from 'react-router-dom'
import React from 'react'
import Layout from './page/Layout'
import Home from './page/Home'
import About from './page/About'
import Dashboard from './page/Dashboard'
import NoMatch from './page/NoMatch'
import Counter from './page/counter/Counter'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="home" element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
          {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        </Route>
      </Routes>
    </div>
  )
}
