import { createSlice } from '@reduxjs/toolkit'

const signUpSlice = createSlice({
  name: 'logIn',
  initialState: {
    password: '',
    email: '',
  },
  reducers: {
    setPassword: (state, action) => {
     const password  = action.payload;
      state.password = password;
    },
    setEmail: (state, action) => {
      const  email  = action.payload;
      state.email = email;
    }
  }
});

export const { setPassword, setEmail } = signUpSlice.actions;
export default signUpSlice.reducer;