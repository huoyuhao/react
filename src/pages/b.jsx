import { useSearchParams, useParams } from 'react-router-dom';

export default function Page()  {
  const [searchParams] = useSearchParams();
  const params = useParams();
  console.log(searchParams.toString());
  console.log(params);
  return (
    <>
      <p>b</p>
      <p>searchParams: {searchParams.toString()}</p>
      <p>params - author: {params.author}</p>
      <p>params - id: {params.id}</p>
    </>
  )
}