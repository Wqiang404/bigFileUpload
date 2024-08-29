import React, { useState } from 'react'
import { Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import type { MenuProps, MenuTheme } from 'antd'
import { rootRouter } from '../routes/index.tsx'
// import '../static/css/index.css'

type MenuItem = Required<MenuProps>['items'][number]

// const items: MenuItem[] = rootRouter.map(item => ({
//   key: item.path!.slice(1),
//   label: item.path!.slice(1),
//   icon: <MailOutlined />,
//   // children: item.children.map(item => ({
//   //   key: item.path,
//   //   label: item.path,
//   //   icon: <MailOutlined />,
//   //   // children: []
//   // })),
// }))

const items: MenuItem[] = [
  {
    key: 'home',
    label: 'home',
    icon: <MailOutlined />,
    children: [
      {
        key: 'home/home',
        label: 'home',
        icon: <MailOutlined />
        // children: []
      },
      {
        key: 'home/about',
        label: 'about',
        icon: <MailOutlined />
        // children: []
      }
    ]
  },
  {
    key: 'counter',
    label: 'counter',
    icon: <MailOutlined />
    // children: []
  },
  {
    key: 'dashboard',
    label: 'dashboard',
    icon: <MailOutlined />
    // children: []
  },
  {
    key: 'about',
    label: 'about',
    icon: <MailOutlined />
    // children: []
  },
  {
    key: 'NoMatch',
    label: 'NoMatch',
    icon: <MailOutlined />
    // children: []
  }
]

function Layout() {
  const [current, setCurrent] = useState(window.location.pathname.slice(1))
  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
    navigate(e.key)
  }
  return (
    <div className="layout">
      <div className="menu">
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
  )
}

export default Layout
