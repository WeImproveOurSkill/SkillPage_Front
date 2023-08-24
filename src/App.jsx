import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, createContext, useMemo } from 'react';
import useLocalStorage from './util/useLocalStorage.js';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import SignUp from 'pages/SignUp/SignUp.jsx';
import Cart from 'pages/Cart/Cart.jsx';

export const userContext = createContext({
  setIsLoggedIn: () => {},
  isLoggedIn: false,
  setTokens: () => {},
  tokens: {
    accessToken: '',
    refreshToken: ''
  }
});

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('login', false);
  const [tokens, setTokens] = useLocalStorage('jwt', {
    accessToken: '',
    refreshToken: ''
  });

  const value = useMemo(
    () => ({ isLoggedIn, setIsLoggedIn, tokens, setTokens }),
    [isLoggedIn, setIsLoggedIn, tokens, setTokens]
  );

  useEffect(() => {
    const url = new URL(window.location.href);
    const accessToken = url.searchParams.get('access_token');
    const refreshToken = url.searchParams.get('refresh_token');

    if (accessToken && refreshToken) {
      setTokens({ accessToken, refreshToken });
      setIsLoggedIn(true);
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <userContext.Provider value={value}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
