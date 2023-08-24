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
        <Wrapper>
          <LogoBox to='/'>
            <Logo src={MainImg} alt='MainImg' />
          </LogoBox>
        </Wrapper>
        <Wrapper>
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
          <LoginButton type='submit' onClick={onClick}>
            로그인
          </LoginButton>
        </Wrapper>
        <Wrapper>
          <Google icon={faGoogle} />
        </Wrapper>
      </Container>
      <div>아이디 비밀번호찾기 회원가입</div>
      <div>Copyright © 2019 MANGO Co.,Ltd. All Rights Reserved.</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* height: 100%; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 500px;
  width: 481px;
  margin-top: 100px;
  padding: 0px 50px 0px 50px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

const LogoBox = styled(Link)`
  height: 100px;
  width: 100px;
  margin-bottom: -30px;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
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

const LoginButton = styled.button`
  height: 51px;
  width: 396px;
  background-color: yellow;
  border-radius: 4px;
  font-size: 18px;
  margin-top: 50px;
`;

const Google = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;
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
