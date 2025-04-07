import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <div className='flex flex-col'>
        <Link to="/zustand/a">初始化应用</Link>
        <Link to="/zustand/b">selector使用</Link>
        <Link to="/zustand/c">持久化存储</Link>
        <Link to="/zustand/d">中间件</Link>
      </div>
    </>
  )
}
