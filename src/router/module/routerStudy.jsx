// 导入创建路由的函数
import { Outlet } from 'react-router-dom';

import A from '../../pages/routerStudy/a';
import B from '../../pages/routerStudy/b';
import C from '../../pages/routerStudy/c';
import D from '../../pages/routerStudy/d';
import E from '../../pages/routerStudy/e';
import App from '../../pages/routerStudy';
import Layout from '../../pages/common/Layout';
import Index from '../../pages/common/Index';
import RequireAuth from '../../pages/common/RequireAuth';
import ErrorPage from '../../pages/common/Error';
// 创建router路由实例对象，并配置路由对应关系（路由数组）
export default [
  {
    // 需要访问的路径
    path: '/routerStudy',
    // 和路径对应的组件
    // 和 Vue 不同的是，此处是使用 element 接收 组件 或 jsx 的
    // 此处写 jsx 是为了演示，在实际开发中，这里写的是组件
    element: <RequireAuth><Outlet></Outlet></RequireAuth>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/routerStudy/a',
        element: <A></A>
      },
      {
        path: '/routerStudy/b/:author/:id',
        element: <B></B>
      },
      {
        path: '/routerStudy/c',
        element: <C></C>
      },
      {
        path: '/routerStudy/d',
        element: <Layout />, // 路由 嵌套关系；
        children: [
          {
            // 设置默认二级路由，一级路由访问的时候，它也能得到渲染
            // path: 'about',
            // 访问的时候，直接访问 /layout 即可
            index: true,
            element: <Index />
          },
          {
            path: 'd',
            element: <D />
          }
        ]
      },
      {
        path: '/routerStudy/e',
        element: <E></E>
      },
    ]
  },
];
