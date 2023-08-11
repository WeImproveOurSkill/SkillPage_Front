import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import { usePost } from './api';
import { checkPassword, checkId, checkEmail, checkPhoneNumber } from './checkPassword';

function useLoginLogic(initialInputs, url, alertMsg, key1, key2, key3, key4, key5, key6, key7) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initialInputs);
  const [usableId, setUsableId] = useState(false);
  const [auth, setAuth] = useState(false);
  const { setIsLoggedIn, setTokens } = useContext(userContext);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const clickCheckId = async (e) => {
    e.preventDefault();
    const resultId = checkId(inputs.userIdentifier);
    if (!resultId) return;

    const res = await usePost(url, inputs.userIdentifier);
    if (res.status === 400) {
      alert('이미 사용중인 아이디입니다');
      setUsableId(false);
    }
    if (res.ok) {
      alert('사용 가능한 아이디입니다');
      setUsableId(true);
    }
  };

  const clickPhoneNumber = async (e) => {
    e.preventDefault();
    const resultPhoneNumber = checkPhoneNumber(inputs.phoneNumber);
    if (!resultPhoneNumber) return;

    const res = await usePost(url, inputs.phoneNumber);
    if (res.status === 400) {
      alert('인증번호가 발송되지 않았습니다');
    }
    if (res.ok) {
      alert('인증번호 발송되었습니다');
    }
  };

  const clickAuthPhoneNumber = async (e) => {
    e.preventDefault();
    if (inputs.phoneNumberCheck === '') {
      alert('인증번호를 입력하시오');
      return;
    }

    const res = await usePost(url, inputs.phoneNumberCheck);
    if (res.status === 400) {
      alert('인증번호가 일치하지않습니다');
      setAuth(false);
    }
    if (res.ok) {
      alert('인증번호 확인되었습니다');
      setAuth(true);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      inputs[key1] === '' ||
      inputs[key2] === '' ||
      inputs[key3] === '' ||
      inputs[key4] === '' ||
      inputs[key5] === '' ||
      inputs[key6] == '' ||
      inputs[key7] == ''
    ) {
      alert(alertMsg);
      return;
    }
    if (usableId === false) {
      alert('아이디 중복체크 하세요');
      return;
    }
    if (auth === false) {
      alert('인증번호를 확인하세요');
      return;
    }
    const resultId = checkId(inputs.userIdentifier);
    if (!resultId) return;
    const resultPassword = checkPassword(inputs.password);
    if (!resultPassword) return;
    const resultEmail = checkEmail(inputs.email);
    if (!resultEmail) return;
    const resultPhoneNumber = checkPhoneNumber(inputs.phoneNumber);
    if (!resultPhoneNumber) return;

    const isSame = inputs.password === inputs.passwordCheck;
    if (!isSame) {
      alert('비밀번호가 다릅니다');
      return;
    }

    const res = await usePost(url, inputs);
    const accessToken = res.headers.get('Authorization');
    const refreshToken = res.headers.get('Refresh');
    if (!res) {
      // 에러 처리 로직
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

  return [inputs, onChange, onSubmit, clickCheckId, clickPhoneNumber, clickAuthPhoneNumber];
}

export default useLoginLogic;
