import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from './slice/signUp'  // ✅ import the reducer
import loginReducer from './slice/logIn';

const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    LogIn: loginReducer
  }
})

export default store;