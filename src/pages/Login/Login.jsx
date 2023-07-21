import { useState } from 'react';
import { useLogin } from '../../util/useLogin';

function Login() {
  const [userIdentifier, setUserIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const { data, loading, error, login } = useLogin('http://localhost:8080/member1/login');

  function handleSubmit(event) {
    event.preventDefault();
    login({ userIdentifier, password });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          id:
          <input
            type='text'
            value={userIdentifier}
            onChange={(event) => setUserIdentifier(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type='submit'>Log in</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>Logged in as: {data.userIdentifier}</div>}
    </div>
  );
}

export default Login;
