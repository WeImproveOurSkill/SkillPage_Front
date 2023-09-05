import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

function CartPayment() {
  const cartItems = useSelector((state) => state.cart.items);

  const sumPrice = cartItems
    .filter((item) => item.isChecked)
    .reduce((total, item) => total + item.totalPrice, 0);

  // const paymentPrice = sumPrice - discountPrice

  return (
    <Wrapper>
      <AmountWrapper>
        <div>선택상품금액 : {sumPrice}원</div>
        <div>-</div>
        <div>할인금액 : 0원</div>
        <div>=</div>
        <div>주문금액 원</div>
      </AmountWrapper>
      <PayButton>주문하기</PayButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  padding-top: 25px;
  font-size: 16px;
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 570px;
  padding-right: 46px;
`;

const PayButton = styled.button`
  width: 184px;
  height: 100%;
  border: 0px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  background-color: #fffd55;
  color: #25b00d;
`;

export default CartPayment;
