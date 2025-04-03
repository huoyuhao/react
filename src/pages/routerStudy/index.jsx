import { Link, useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col'>
        <p>首页</p>
        <div className='flex flex-col'>
          {/* 声明式 */}
          <Link to={'/routerStudy/a?userId=100&articleId=abc'}>useSearchParams获取query参数</Link>
          <Link to="/routerStudy/b/huoyuhao/123?userId=101&articleId=def">useSearchParams获取路径和query参数</Link>
          {/* 编程式 */}
          <div onClick={() => navigate('/routerStudy/c?userId=102&articleId=ghi')}>useLocation获取当前路径</div>
          <div onClick={() => navigate('/routerStudy/c', { state: { name: 'John', age: 25 } })}>useLocation获取跳转传递状态</div>
          <div onClick={() => navigate('/routerStudy/d')}>跳转到嵌套D页面</div>
          <div onClick={() => navigate('/routerStudy/d/d')}>跳转到嵌套D的子页面</div>
          <Link to="/routerStudy/e">页面报错 重定向</Link>
        </div>
      </div>
    </>
  )
}
