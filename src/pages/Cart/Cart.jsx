import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartList from './CartList';
import Footer from 'components/Footer/Footer';
import MainImg from 'asset/logo192.png';
import CartPayment from './CartPayment';

function Cart() {
  return (
    <Wrapper>
      <LogoBox to='/'>
        <Logo src={MainImg} alt='MainImg' />
      </LogoBox>
      <CartContainer>
        <CartLogoWrapper>
          <CartLogo icon={faCartShopping} size='2x' />
          <CartText>장바구니</CartText>
        </CartLogoWrapper>
        <CartList />
        <CartPayment />
      </CartContainer>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efefef;
  font-size: 15px;
`;

const LogoBox = styled(Link)`
  height: 100px;
  width: 980px;
  padding: 10px 0px 10px 0px;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const CartContainer = styled.div`
  width: 900px;
  padding: 40px 39px 40px 39px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  background-color: white;
`;

const CartLogoWrapper = styled.div`
  display: flex;
  width: 900px;
  height: 45px;
  padding-bottom: 32px;
  border-bottom: 1px solid lightgray;
`;

const CartLogo = styled(FontAwesomeIcon)``;

const CartText = styled.div`
  padding-left: 20px;
  font-size: 36px;
  font-weight: 300;
`;

export default Cart;
