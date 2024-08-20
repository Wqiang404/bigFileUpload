import React from "react";
import { createRoot } from 'react-dom/client';
import { Routes, Route, Navigate  } from "react-router-dom";//三个路由组件
import { Provider } from "react-redux";//负责把属性中的store传递给子组件
// import store from "./store";//引入仓库
import { ConfigProvider } from "antd";//配置
import zh_CN from "antd/locale/zh_CN";//国际化中文
import App from "./App.tsx";
// import 'antd/dist/antd.css';
// import "./assets/css/common.less";//通用的样式
// import Tabs from "./components/Tabs";//引入底部的页签导航
// import Home from "./routes/Home";//首页
// import Mine from "./routes/Mine";//我的课程
// import Profile from "./routes/Profile";//个人中心
// import { ConnectedRouter } from 'connected-react-router';//redux绑定路由
// import history from './store/history';
const root = createRoot(document.getElementById('root') as Element);
root.render(
    // <Provider store={store}>
    //     <ConfigProvider locale={zh_CN}>
    //         <main className="main-container">
    //             <Routes>
    //                 <Route path="/" element={<Home />} />
    //                 <Route path="/mine" element={<Mine />} />
    //                 <Route path="/profile" element={<Profile />} />
    //                 <Navigate  to="/" />
    //             </Routes>
    //         </main>
    //         <Tabs />
    //     </ConfigProvider>
    // </Provider>,
    <App />,
    // document.getElementById("root")
);