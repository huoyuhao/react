// 导入创建路由的函数
import { Outlet } from 'react-router-dom';

import Index from '../../pages/zustand';
import A from '../../pages/zustand/a';
import B from '../../pages/zustand/b';
import C from '../../pages/zustand/c';
import D from '../../pages/zustand/d';

export default [
  {
    // 需要访问的路径
    path: '/zustand',
    element: <Outlet></Outlet>,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'a',
        element: <A />
      },
      {
        path: 'b',
        element: <B />
      },
      {
        path: 'c',
        element: <C />
      },
      {
        path: 'd',
        element: <D />
      },
    ]
  },
];
