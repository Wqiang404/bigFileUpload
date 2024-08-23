import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Menu } from 'antd'; 
import '../static/css/index.css'

function Layout() {
    const menuItems = [  
      { key: 'home', title: 'Home', path: '/' },  
      { key: 'about', title: 'About', path: '/about' },  
      { key: 'dashboard', title: 'Dashboard', path: '/dashboard' },  
    ];
    return (
      <div className="layout">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav> */}
        <div className='menu'>
          <Menu mode="vertical" style={{ lineHeight: '64px', height: '100%' }}>  
            {menuItems.map(item => (  
              <Menu.Item key={item.key}>  
                <Link to={item.path}>{item.title}</Link>  
              </Menu.Item>  
            ))}  
          </Menu>
        </div>
  
        <div className="container">
          <Outlet />
        </div>
  
        
      </div>
    );
  }

  export default Layout;
  