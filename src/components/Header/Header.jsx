import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  faBars,
  faMagnifyingGlass,
  faTruck,
  faCartShopping,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainImg from 'asset/logo192.png';
import { useSelector } from 'react-redux';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Container>
      <Box>
        <HeaderUp>
          <Menu icon={faBars} size='2x'></Menu>
          <Link to='/'>
            <Logo src={MainImg} alt='MainImg'></Logo>
          </Link>
          <Search>
            <SearchButton icon={faMagnifyingGlass}></SearchButton>
          </Search>
          <Rank>실시간순위</Rank>
          <MyPage>
            {isLoggedIn ? (
              <>
                <FaUser icon={faUser} /> <FaTruck icon={faTruck} />
              </>
            ) : (
              <Login to='login'>로그인</Login>
            )}
            <Link to='cart'>
              <FaCartShopping icon={faCartShopping}></FaCartShopping>
            </Link>
          </MyPage>
        </HeaderUp>
      </Box>
      {/* <Box>
        <HeaderDown>
          <List>
            <li>슈팅배송</li>
            <li>쇼킹딜</li>
            <li>| 베스트</li>
            <li>쿠폰/기획전</li>
            <li>장보기</li>
            <li>T공식대리점</li>
          </List>
          <Amazon>
            <li>a로고 아마존</li>
            <li>아마존 딜</li>
            <li>아마존 베스트</li>
          </Amazon>
          <User>
            <li>로그인</li>
            <li>회원가입</li>
          </User>
        </HeaderDown>
      </Box> */}
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  min-height: 120px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid lightgray;
`;

const HeaderUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 120px;
`;

const Menu = styled(FontAwesomeIcon)`
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0 0 2px #888;
  padding: 0.5em;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const Search = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 456px;
  height: 50px;
  border-radius: 30px;
  box-shadow: 0 0 2px #888;
  background-color: #fafafaf5;
`;

const SearchButton = styled(FontAwesomeIcon)`
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0 0 2px #888;
  padding: 0.5em;
  margin-right: 5px;
  background-color: #25b00d;
  color: white;
  font-size: 1.3rem;
`;

const Rank = styled.div`
  width: 210px;
  display: flex;
  justify-content: center;
`;

const MyPage = styled.div`
  width: 267px;
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;
`;

const FaUser = styled(FontAwesomeIcon)`
  font-size: 2.3rem;
`;

const Login = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 2px;
  font-weight: 500;
  font-size: 24px;
`;

const FaTruck = styled(FontAwesomeIcon)`
  font-size: 2.3rem;
`;

const FaCartShopping = styled(FontAwesomeIcon)`
  font-size: 2.3rem;
`;

// const HeaderDown = styled.div`
//   width: 100%;
//   max-width: 1240px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 66px;
// `;

// const List = styled.ul`
//   display: flex;
//   width: 100%;
//   list-style: none;
//   padding-left: 0px;
//   font-size: 19px;
// `;

// const Amazon = styled.ul`
//   display: flex;
//   width: 100%;
//   list-style: none;
//   padding-left: 0px;
//   font-size: 19px;
// `;

// const User = styled.ul`
//   display: flex;
//   width: 100%;
//   list-style: none;
//   padding-left: 0px;
//   font-size: 17px;
// `;

export default Header;
