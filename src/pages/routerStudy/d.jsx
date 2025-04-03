export default function Page()  {
  const loginOut = () => {
    //模拟登录成功
    window.isLogin = false;
  };
  return (
    <>
      <p>D</p>
      <div onClick={loginOut}>注销登录</div>
    </>
  )
}