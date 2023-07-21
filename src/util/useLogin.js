import { usePost } from './api';

function useLogin(url) {
  const { data, loading, error, postData } = usePost(url);

  async function login(credentials) {
    await postData(credentials);
  }

  return { data, loading, error, login };
}

export { useLogin };
