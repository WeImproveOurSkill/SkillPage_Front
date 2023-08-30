import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePost } from './api';
import { checkId, checkPassword } from './checkPassword';
import { useSelector } from 'react-redux';

function useLoginLogic(initialInputs, url, alertMsg, key1, key2) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initialInputs);

  const setIsLoggedIn = useSelector((state) => state.auth.IsLoggedIn);
  const setTokens = useSelector((state) => state.auth.tokens);

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
    const accessToken = res.headers.get('Authorization');
    const refreshToken = res.headers.get('Refresh');
    if (!res) {
      // 에러 처리 로직
      console.log('login failed');
      return;
    }
    if (res.ok) {
      setTokens({
        accessToken,
        refreshToken
      });
      setIsLoggedIn(true);
      navigate('/');
    }
  };

  return [inputs, onChange, onClick];
}
export default useLoginLogic;
