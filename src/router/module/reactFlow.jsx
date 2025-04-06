// 导入创建路由的函数
import { Outlet } from 'react-router-dom';

import Index from '../../pages/reactFlow';
import A from '../../pages/reactFlow/a';
import B from '../../pages/reactFlow/b';
import C from '../../pages/reactFlow/c';
// 创建router路由实例对象，并配置路由对应关系（路由数组）
export default [
  {
    // 需要访问的路径
    path: '/reactFlow',
    element: <Outlet></Outlet>,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/reactFlow/a',
        element: <A />
      },
      {
        path: '/reactFlow/b',
        element: <B />
      },
      {
        path: '/reactFlow/c',
        element: <C />
      },
    ]
  },
];
