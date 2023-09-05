import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

function CartItem(props) {
  const dispatch = useDispatch();
  const { id, title, price, quantity, isChecked } = props;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price
      })
    );
  };

  const isCheckedHandler = () => {
    dispatch(cartActions.toggleItemCheckbox(id));
  };

  return (
    <Wrapper>
      <CheckBoxWrapper>
        <CheckBox type='checkbox' checked={isChecked} onChange={isCheckedHandler}></CheckBox>
      </CheckBoxWrapper>
      <ImageWrapper>상품사진</ImageWrapper>
      <CartDetail>
        <TitleWrapper>{title}</TitleWrapper>
        <QuantityPriceBox>
          <PriceWrapper>{price}원</PriceWrapper>
          <section>
            <IncreaseDecreaseButton onChange={removeItemHandler}>-</IncreaseDecreaseButton>
            <BuyQuantity type='number' value={quantity} readOnly></BuyQuantity>
            <IncreaseDecreaseButton onChange={addItemHandler}>+</IncreaseDecreaseButton>
          </section>
        </QuantityPriceBox>
      </CartDetail>
      <TotalPrice>{quantity * price}원</TotalPrice>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 138px;
  border: 1px solid lightgray;
  border-width: 0px 1px 1px 1px;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
  border-right: 1px solid lightgray;
`;

const CheckBox = styled.input`
  margin-right: 10px;
  margin: 0px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100px;
  padding-right: 15px;
  border-right: 1px solid lightgray;
`;

const CartDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 633px;
  border-right: 1px solid lightgray;
`;

const TitleWrapper = styled.div`
  margin-left: 10px;
  max-width: 400px;
`;

const QuantityPriceBox = styled.div`
  display: flex;
  margin-right: 6px;
  height: 26px;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 109px;
`;

const BuyQuantity = styled.input`
  width: 40px;
  height: 20px;
  font-size: 16px;
  text-align: center;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const IncreaseDecreaseButton = styled.button`
  width: 24px;
  height: 100%;
  margin: 0px 1px;
  font-size: 16px;
`;

export default CartItem;
