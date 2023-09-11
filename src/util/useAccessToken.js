import { useSelector } from 'react-redux';

function useAccessToken() {
  const tokens = useSelector((state) => state.auth.tokens);
  const accessToken = tokens && tokens.accessToken;
  return accessToken;
}

export default useAccessToken;
