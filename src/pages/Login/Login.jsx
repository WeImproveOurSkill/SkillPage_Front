import { styled } from 'styled-components';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useLoginLogic from '../../util/useLoginLogic';
import MainImg from 'asset/logo192.png';
import { Link } from 'react-router-dom';

function Login() {
  const initialInputs = {
    userIdentifier: '',
    password: ''
  };
  const LOGIN_POST_URL = `/login`;
  const msg = '아이디와 비밀번호를 채워주세요';

  const [inputs, onChange, onClick] = useLoginLogic(
    initialInputs,
    LOGIN_POST_URL,
    msg,
    'userIdentifier',
    'password'
  );

  const { userIdentifier, password } = inputs;

  return (
    <Wrapper>
      <Container>
        <LogoBox to='/'>
          <Logo src={MainImg} alt='MainImg' />
        </LogoBox>
        <InputWrapper>
          <Input
            name='userIdentifier'
            type='text'
            placeholder='아이디 입력'
            value={userIdentifier}
            onChange={onChange}
          />
          <Input
            name='password'
            type='password'
            placeholder='비밀번호 8자~20자'
            value={password}
            onChange={onChange}
          />
          <FindContainer>
            <div>아이디찾기</div>
            <div>비밀번호찾기</div>
            <SignUp to='/join'>회원가입</SignUp>
          </FindContainer>
        </InputWrapper>
        <LoginButton type='submit' onClick={onClick}>
          로그인
        </LoginButton>
        <Google icon={faGoogle} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 600px;
  width: 481px;
  margin-top: 100px;
  padding: 0px 50px 0px 50px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const LogoBox = styled(Link)`
  padding-top: 20px;
  height: 100px;
  width: 100px;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  height: 47px;
  width: 364px;
  font-size: 18px;
  padding: 0px 16px 0px 16px;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin-bottom: 1px;
`;

const FindContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  padding-top: 20px;
`;

const LoginButton = styled.button`
  height: 51px;
  width: 396px;
  background-color: yellow;
  border-radius: 4px;
  font-size: 18px;
`;

const Google = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const SignUp = styled(Link)``;

export default Login;

// const [userIdentifier, setUserIdentifier] = useState('');
// const [password, setPassword] = useState('');
// const LOGIN_POST_URL = `${process.env.REACT_APP_URL}/login`;

// function handleClick(e) {
//   e.preventDefault();
// }
// const [inputs, onChange, onSubmit] = useLoginLogic(
//   initialInputs,
//   LOGIN_POST_URL,
//   msg,
//   'username',
//   'password'
// );
