import { createSlice } from '@reduxjs/toolkit'

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    password: '',
    email: '',
    name: '',
    confirmPassword: ''
  },
  reducers: {
    setPassword: (state, action) => {
     const password  = action.payload;
      state.password = password;
    },
    setEmail: (state, action) => {
      const  email  = action.payload;
      state.email = email;
    },
    setName: (state, action) => {
      const name  = action.payload;
      state.name = name;
    },
    setConfirmPassword: (state, action) => {
        const confirmPassword  = action.payload;
        console.log(confirmPassword)
      state.confirmPassword = confirmPassword;
    }
  }
});

export const { setPassword, setEmail, setName, setConfirmPassword } = signUpSlice.actions;
export default signUpSlice.reducer;
