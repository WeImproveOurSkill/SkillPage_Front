import { useState } from 'react';

function useLogin(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login(credentials) {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  return { data, loading, error, login };
}

export { useLogin };
