// 导入创建路由的函数
import { createBrowserRouter } from 'react-router-dom';

import Root from '../pages';
import Login from '../pages/common/Login';
import NotFound from '../pages/common/404';
import routerStudy from './module/routerStudy';
import reactFlow from './module/reactFlow';
import zustand from './module/zustand';

// 创建router路由实例对象，并配置路由对应关系（路由数组）
const router = createBrowserRouter([
  {
      path: '/',
      element: <Root />
  },
  {
      path: '/login',
      caseSensitive: false, // 是否匹配path的大小写
      element: <Login />
  },
  ...routerStudy,
  ...reactFlow,
  ...zustand,
  {
      path: '*',
      element: <NotFound />
  }
]);

export default router;
