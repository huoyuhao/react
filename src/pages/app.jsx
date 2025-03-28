import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col items-center'>
        <p>首页</p>
        <div className='flex flex-col'>
          {/* 声明式 */}
          <Link to={'/a?userId=1001&articleId=abcd'}>A</Link>
          <Link to="/b/huoyuhao/123?userId=1001&articleId=abcd">B</Link>
          {/* 编程式 */}
          <button onClick={() => navigate('/c')}>跳转到C页面</button>
          <button onClick={() => navigate('/d')}>跳转到D页面</button>
        </div>
      </div>
    </>
  )
}

export default App
