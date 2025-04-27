import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../features/notesSlice'
import authenticationReducer from '../features/authenticationSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    user: authenticationReducer
    
  },
})