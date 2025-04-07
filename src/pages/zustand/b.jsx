import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import React from 'react';

const useConfigStore = create((set) => ({
  theme: 'light',
  lang: 'zh-CN',
  setLang: (lang) => set({lang}),
  setTheme: (theme) => set({theme}),
}));

// const Lang = () => {
//   const { lang, setLang } = useConfigStore();
//   console.log('lang render...');
//   return (
//     <div>
//       <div>{lang}</div>
//       <button onClick={() => setLang(lang === 'zh-CN' ? 'en-US' : 'zh-CN')}>切换</button>
//     </div>
//   )
// }
const Theme = () => {
  const { theme, setTheme } = useConfigStore();
  console.log('theme render');
  return (
    <div>
      <div>{theme}</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切换</button>
    </div>
  )
}
// 按照上面写法，改变theme会导致Lang组件渲染，改变lang会导致Theme重新渲染，但是实际上这两个都没有关系
// 优化：把值单个return出来，zustand内部会判断两次返回的值是否一样，如果一样就不重新渲染
// const Lang = React.memo(() => {
//   const lang = useConfigStore((state) => state.lang);
//   const setLang = useConfigStore((state) => state.setLang);
//   console.log('lang render...');
//   return (
//     <div>
//       <div>{lang}</div>
//       <button onClick={() => setLang(lang === 'zh-CN' ? 'en-US' : 'zh-CN')}>切换</button>
//     </div>
//   )
// })
// 上面写法如果变量很多的情况下，要写很多遍useConfigStore，有点麻烦。可以把上面方案改写成这样

const Lang = () => {

  const { lang, setLang } = useConfigStore(
    useShallow(state => ({
      lang: state.lang,
      setLang: state.setLang,
    }))
  );
  console.log('lang render...');

  return (
    <div>
      <div>{lang}</div>
      <button onClick={() => setLang(lang === 'zh-CN' ? 'en-US' : 'zh-CN')}>切换</button>
    </div>
  )
}
export default function Page()  {
  return (
    <>
      <div className='flex flex-col items-start'>
        <Lang />
        <Theme />
      </div>
    </>
  )
}