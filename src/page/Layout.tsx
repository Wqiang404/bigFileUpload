import React, { useState } from "react";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import { Menu } from 'antd'; 
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import '../static/css/index.css'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'home',
    label: 'home',
    icon: <MailOutlined />,
    // children: []
  },
  {
    key: 'dashboard',
    label: 'dashboard',
    icon: <MailOutlined />,
    // children: []
  },
  {
    key: 'about',
    label: 'about',
    icon: <MailOutlined />,
    // children: []
  },
  {
    key: 'NoMatch',
    label: 'NoMatch',
    icon: <MailOutlined />,
    // children: []
  }
]

function Layout() {
  const [current, setCurrent] = useState(window.location.pathname.slice(1));
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };
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
          <Menu
            theme={'dark'}
            onClick={onClick}
            style={{ width: 256, height: '100vh' }}

            defaultOpenKeys={['home']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </div>
  
        <div className="container">
          <Outlet />
        </div>
  
        
      </div>
    );
  }

export default Layout; 
  