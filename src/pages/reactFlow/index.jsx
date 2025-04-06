import { Link, useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col'>
        <Link to="/reactFlow/a">初始化页面</Link>
        <Link to="/reactFlow/b">自定义节点</Link>
        <Link to="/reactFlow/c">自定义边</Link>
      </div>
    </>
  )
}
