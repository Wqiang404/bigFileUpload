import React from "react";
import { createRoot } from 'react-dom/client';
import { Routes, Route, Navigate  } from "react-router-dom";//三个路由组件
import { Provider } from "react-redux";//负责把属性中的store传递给子组件
// import store from "./store";//引入仓库
import { ConfigProvider } from "antd";//配置
import zh_CN from "antd/locale/zh_CN";//国际化中文
import App from "./App.tsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./static/css/index.css";//通用的样式
import store from "./store/index.ts";
import Router from './routes/index.tsx'

const root = createRoot(document.getElementById('root') as Element);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Router />
                {/* <App /> */}
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);