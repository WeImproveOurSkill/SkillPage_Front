import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

export function useLocalStorage(key, initialState) {
  const dispatch = useDispatch();

  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialState
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));

    // 토큰 정보 업데이트
    if (key === 'jwt') {
      dispatch(authActions.setTokens(state));
    }
  }, [key, state, dispatch]);

  return [state, setState];
}
