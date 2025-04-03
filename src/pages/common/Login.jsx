import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Page() {
  const navigate = useNavigate();
  const location = useLocation();
  const login = () => {
    //模拟登录成功
    window.isLogin = true;
    //跳转至RequireAuth拦截的目标页面
    navigate((location.state?.from?.pathname || '/') + (location.search || ''), { state: { ...(location.state || {}) } });
  };

  return (
    <div onClick={login}>登录</div>
  );
}