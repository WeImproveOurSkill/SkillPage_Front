import { styled } from 'styled-components';
import Footer from 'components/Footer/Footer';
import CartItem from './CartItem';
import MainImg from 'asset/logo192.png';

const DUMMY_PRODUCTS = [
  {
    basketId: 'p1',
    productName: 'My First Book',
    productPrice: 6,
    productCnt: 'The first book I ever wrote'
  },
  {
    basketId: 'p2',
    productName: 'My Second Book',
    productPrice: 5,
    productCnt: 'The Second book I ever wrote'
  }
];

function Cart() {
  return (
    <Wrapper>
      <LogoBox>
        <Logo src={MainImg} alt='MainImg' />
      </LogoBox>
      <CartContainer>
        {DUMMY_PRODUCTS.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
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
  width: 900px;
  padding: 40px 39px 40px 39px;
  border: 1px solid gray;
`;

export default Cart;
