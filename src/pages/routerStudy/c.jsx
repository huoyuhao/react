import { useLocation } from 'react-router-dom'

// 定义一个名为 About 的函数组件

export default function C () {
  // 使用 hook
  const location = useLocation();
  // 获取当前路径和来源路径
  const { search, pathname, state } = location
  // 打印当前路径和来源路径
  console.log(location);
  // 返回一个 div 元素，显示当前路径和来源路径
  return (
    <>
      <p>C</p>
      <p>pathname: {pathname}</p>
      <p>search: {search}</p>
      <p>state刷新当前页面存在缓存，拷贝URL新页面打开为空</p>
      <p>state: {JSON.stringify(state)}</p>
    </>
  )
}
