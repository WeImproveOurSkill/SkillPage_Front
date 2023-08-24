import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import { usePost } from './api';
import { checkId, checkPassword } from './checkPassword';

function useLoginLogic(initialInputs, url, alertMsg, key1, key2) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initialInputs);
  const { setIsLoggedIn, setTokens } = useContext(userContext); // 토큰 로그인 문제시 setTokens 삭제

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onClick = async (e) => {
    e.preventDefault();

    if (inputs[key1] === '' || inputs[key2] === '') {
      alert(alertMsg);
      return;
    }
    const resultId = checkId(inputs.userIdentifier);
    if (!resultId) return;
    const resultPassword = checkPassword(inputs.password);
    if (!resultPassword) return;

    const res = await usePost(url, inputs);
    const accessToken = res.headers.get('Authorization'); // 토큰 로그인 문제시 주석 처리
    const refreshToken = res.headers.get('Refresh'); // 토큰 로그인 문제시 주석 처리
    if (!res) {
      // 에러 처리 로직
      console.log('login failed');
      return;
    }
    if (res.ok) {
      setTokens({
        // 토큰 로그인 문제시 주석 처리
        accessToken,
        refreshToken
      }); // 토큰 로그인 문제시 주석 처리
      setIsLoggedIn(true);
      navigate('/');
    }
  };

  return [inputs, onChange, onClick];
}
export default useLoginLogic;
