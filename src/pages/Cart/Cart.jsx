import { styled } from 'styled-components';
import Footer from 'components/Footer/Footer';
import MainImg from 'asset/logo192.png';

function Cart() {
  return (
    <Wrapper>
      <LogoBox>
        <Logo src={MainImg} alt='MainImg' />
      </LogoBox>
      <CartContainer></CartContainer>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoBox = styled.div`
  height: 100px;
  width: 980px;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const CartContainer = styled.div`
  width: 980px;
`;

export default Cart;
