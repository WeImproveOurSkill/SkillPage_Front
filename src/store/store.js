import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice'; // authSlice에서 가져온 리듀서를 포함시킵니다
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer // authSlice의 리듀서를 등록합니다
  }
});

export default store;
