import { useSearchParams } from 'react-router-dom';

export default function Page()  {
  const [params] = useSearchParams();
  
  console.log(params.toString());
  return (
    <>
      <p>a</p>
      <p>{params.toString()}</p>
    </>
  )
}