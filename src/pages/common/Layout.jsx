
import { Outlet } from 'react-router-dom';
export default function Page()  {
  return (
    <>
      <div>Header</div>
      {/* 使用 <Outlet />组件 配置 二级路由 渲染位置（二级路由出口）； */}
      <Outlet />
    </>
  )
}