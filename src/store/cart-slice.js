import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
      {
        id: 'p1',
        price: 600000,
        title: 'My First Book'
        // quantity: 1
      },
      {
        id: 'p2',
        price: 5000,
        title: 'My Second Book'
        // quantity: 1
      }
    ],
    totalQuantity: 0,
    isAllChecked: false
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        // state.checkedItems = state.checkedItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    toggleItemCheckbox(state, action) {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.isChecked = !item.isChecked;
        state.isAllChecked = state.items.every((item) => item.isChecked);
      }
    },
    toggleAllCheckbox(state) {
      // 전체선택 상태 토글
      state.isAllChecked = !state.isAllChecked;

      // 모든 아이템의 isChecked를 전체선택 상태로 일괄 설정
      state.items.forEach((item) => {
        item.isChecked = state.isAllChecked;
      });
    }
  }
});

export const sendCartData = (cart) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch('https://react-http-6b4a6.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
