// import { useState, useEffect } from 'react';

// function useLocalStorage(key, initialState) {
//   const [state, setState] = useState(
//     () => JSON.parse(window.localStorage.getItem(key)) || initialState
//   );

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// }

// export default useLocalStorage;

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTokens } from '../store/authSlice';

export function useLocalStorage(key, initialState) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialState
  );

  const dispatch = useDispatch(); // useDispatch를 추가합니다

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));

    // 토큰 정보 업데이트
    if (key === 'jwt') {
      dispatch(setTokens(state));
    }
  }, [key, state, dispatch]);

  return [state, setState];
}
