import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  isLogin: false,
  value: []
}



export const SignUp = createAsyncThunk("signUp", async (user) => {
  
  fetch("https://notes-backend-i0bu.onrender.com/auth/signup", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)

  })
})

export const logIn = createAsyncThunk("logIn", async (user) => {
  const response = await fetch("https://notes-backend-i0bu.onrender.com/auth/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  const status = response.status;
  const token = await response.text();

  return {status, token};
})

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,

  extraReducers: (builder) => {

    builder.addCase(logIn.fulfilled, (state, action) => {
      if(action.payload.status==200){
        localStorage.setItem("token", action.payload.token);
        state.isLogin = true;
      }
    })
  },

  reducers: {
    logout: (state) => {
      state.isLogin=false;
      localStorage.removeItem("token");
    }
  },
})

// Action creators are generated for each case reducer function
export const { logout } = authenticationSlice.actions

export default authenticationSlice.reducer