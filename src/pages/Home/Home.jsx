import { useFetch } from '../../util/api';

function Home() {
  const { data, loading } = useFetch('http://localhost:8080');

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <h1>Hello</h1>
    </div>
  );
}

export default Home;
