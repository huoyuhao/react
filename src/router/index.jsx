// 导入创建路由的函数
import { createBrowserRouter } from 'react-router-dom';

import A from '../pages/a';
import B from '../pages/b';
import C from '../pages/c';
import D from '../pages/d';
import App from '../pages/app';
import Layout from '../pages/common/Layout';
import NotFound from '../pages/common/404';
import Index from '../pages/common/Index';
// 创建router路由实例对象，并配置路由对应关系（路由数组）
const router = createBrowserRouter([
  {
    // 需要访问的路径
    path: '/',
    // 和路径对应的组件
    // 和 Vue 不同的是，此处是使用 element 接收 组件 或 jsx 的
    // 此处写 jsx 是为了演示，在实际开发中，这里写的是组件
    element: <App />
  },
  {
    path: '/a',
    element: <A></A>
  },
  {
    path: '/b/:author/:id',
    element: <B></B>
  },
  {
    path: '/c',
    element: <C></C>
  },
  {
    path: '/d',
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
      path: '*',
      element: <NotFound />
  }
]);

export default router;
