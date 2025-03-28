import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './assets/reset.css'; // 重置样式
import './assets/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 使用 redux 的时候，需要用 Provider 包裹 RouterProvider */}
    {/* 路由绑定，注入路由实例对象 */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

