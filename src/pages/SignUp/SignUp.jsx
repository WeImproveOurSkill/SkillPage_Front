import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import useSignupLogic from '../../util/useSignupLogic';
import MainImg from 'asset/logo192.png';

function SignUp() {
  const initialInputs = {
    userName: '',
    userIdentifier: '',
    password: '',
    passwordCheck: '',
    email: '',
    phoneNumber: '',
    phoneNumberCheck: ''
  };

  const SIGNUP_POST_URL = '/member1/join';
  const msg = '모든 칸이 채워져야 합니다.';

  const [inputs, onChange, onClick, clickCheckId, clickPhoneNumber, clickAuthPhoneNumber] =
    useSignupLogic(
      initialInputs,
      SIGNUP_POST_URL,
      msg,
      'userName',
      'userIdentifier',
      'password',
      'passwordCheck',
      'email',
      'phoneNumber',
      'phoneNumberCheck'
    );

  const {
    userIdentifier,
    password,
    userName,
    email,
    phoneNumber,
    passwordCheck,
    phoneNumberCheck
  } = inputs;

  return (
    <Wrapper>
      <LogoBox to='/'>
        <Logo src={MainImg} alt='MainImg' />
      </LogoBox>
      <Container>
        <InputBoxTop>
          <Input
            name='userName'
            type='text'
            placeholder='이름'
            defaultValue={userName}
            onChange={onChange}
          />
        </InputBoxTop>
        <InputBox>
          <Input
            name='userIdentifier'
            type='text'
            placeholder='아이디'
            defaultValue={userIdentifier}
            onChange={onChange}
          />
          <AuthButton onClick={clickCheckId}>중복체크</AuthButton>
        </InputBox>
        <InputBox>
          <Input
            name='password'
            type='password'
            placeholder='비밀번호'
            defaultValue={password}
            onChange={onChange}
          />
        </InputBox>
        <InputBoxDown>
          <Input
            name='passwordCheck'
            type='password'
            placeholder='비밀번호 확인'
            defaultValue={passwordCheck}
            onChange={onChange}
          />
        </InputBoxDown>
        <InputBoxTop>
          <Input
            name='email'
            type='text'
            placeholder='이메일'
            defaultValue={email}
            onChange={onChange}
          />
        </InputBoxTop>
        <InputBox>
          <Input
            name='phoneNumber'
            type='text'
            placeholder='휴대전화번호'
            defaultValue={phoneNumber}
            onChange={onChange}
          />
          <AuthButton onClick={clickPhoneNumber}>인증번호 발송</AuthButton>
        </InputBox>
        <InputBoxDown>
          <Input
            name='phoneNumberCheck'
            type='text'
            placeholder='인증번호'
            defaultValue={phoneNumberCheck}
            onChange={onChange}
          />
          <AuthButton onClick={clickAuthPhoneNumber}>확인</AuthButton>
        </InputBoxDown>
      </Container>

      <LoginButton type='submit' onClick={onClick}>
        회원가입
      </LoginButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  height: 50vh;
`;

const LogoBox = styled(Link)`
  height: 100px;
  width: 100px;
  margin-bottom: -8vh;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const InputBoxTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 60px;
  width: 405px;
  padding: 0px 10px 0px 45px;
  margin-top: 30px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid lightgray;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 405px;
  padding: 0px 10px 0px 45px;
  border: 1px solid lightgray;
  border-width: 0px 1px 1px 1px;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  height: 50px;
  width: 280px;
  font-size: 18px;
  margin-right: 10px;
  border: none;
`;

const InputBoxDown = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 405px;
  padding: 0px 10px 0px 45px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid lightgray;
  border-width: 0px 1px 1px 1px;
`;

const AuthButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 15px;
  margin-right: -30px;
`;

const LoginButton = styled.button`
  height: 60px;
  width: 460px;
  background-color: yellow;
  color: #565656;
  border-radius: 4px;
  border: 1px solid yellow;
  font-size: 18px;
`;

export default SignUp;
