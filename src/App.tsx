import { Routes, Route, Outlet, Link } from "react-router-dom";
import React from "react";
import Layout from "./page/Layout";
import Home from "./page/Home";
import About from "./page/About";
import Dashboard from "./page/Dashboard";
import NoMatch from "./page/NoMatch";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

