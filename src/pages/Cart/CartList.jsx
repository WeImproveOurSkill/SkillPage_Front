import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from 'store/cart-slice';
import CartItem from './CartItem';

function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isAllChecked = useSelector((state) => state.cart.isAllChecked);

  const handleSelectAllChange = () => {
    // 전체선택 상태 토글 액션을 디스패치
    dispatch(cartActions.toggleAllCheckbox());
  };

  return (
    <div>
      <CartInformation>
        <CheckBoxWrapper>
          <AllCheckbox
            type='checkbox'
            checked={isAllChecked}
            onChange={handleSelectAllChange}
          ></AllCheckbox>
          <div>전체선택</div>
        </CheckBoxWrapper>
        <div>상품정보</div>
        <div>상품가격</div>
      </CartInformation>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          total={item.totalPrice}
          isChecked={item.isChecked}
        />
      ))}
    </div>
  );
}

const CartInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0px 27px 0px 14px;
  background-color: #efefef;
  border-bottom: 1px solid lightgray;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

const AllCheckbox = styled.input`
  margin-right: 10px;
`;

export default CartList;
