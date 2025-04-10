import { useState, useEffect, memo } from 'react';

const Test = () => {
  console.log('test');
  useEffect(() => {
    console.log('useEffect - test');

  })
  return (
    <div>
      <p>test</p>
    </div>
  )
}
const TestMemo = memo(Test)
export default function Page()  {
  const [num, setNum] = useState(0);
  const loginOut = () => {
    //模拟登录成功
    window.isLogin = false;
  };
  console.log('D');
  return (
    <>
      <p>D</p>
      <div>{num}</div>
      <div onClick={() => setNum(val => val + 1)}>新增</div>
      <div onClick={loginOut}>注销登录</div>
      <Test />
      {/* <TestMemo /> */}
    </>
  )
}