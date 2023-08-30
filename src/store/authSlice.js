import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  tokens: {
    accessToken: '',
    refreshToken: ''
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setTokens: (state, action) => {
      state.tokens = action.payload;
    }
  }
});

export const { setIsLoggedIn, setTokens } = authSlice.actions;

export default authSlice.reducer;
