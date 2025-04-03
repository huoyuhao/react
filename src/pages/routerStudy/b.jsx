import { useSearchParams, useParams } from 'react-router-dom';

export default function Page()  {
  const [searchParams] = useSearchParams();
  const params = useParams();
  console.log(searchParams.toString());
  console.log(params.author, params.id);
  return (
    <>
      <p>b</p>
      <p>searchParams: {searchParams.toString()}</p>
      <p>searchParams - userId: {searchParams.getAll('userId')}</p>
      <p>params - author: {params.author}</p>
      <p>params - id: {params.id}</p>
    </>
  )
}