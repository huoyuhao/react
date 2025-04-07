import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <div className='flex flex-col'>
        <p>首页</p>
        <div className='flex flex-col'>
          <Link to="/routerStudy">路由学习</Link>
          <Link to="/reactFlow">reactFlow学习</Link>
          <Link to="/zustand">zustand学习</Link>
        </div>
      </div>
    </>
  )
}
