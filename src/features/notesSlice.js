import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import isAuthenticated from '../hooks/isAuthenticated';

const initialState = {
  value: {
    isLoading: true,
    notesValue: []
  },
}

export const fetchNotes = createAsyncThunk("fetchNotes", async () => {
  const response = await fetch("https://notes-backend-ujmp.onrender.com/notes/getnotes",{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    
  });
  return response.json();
})

export const sendNotes = createAsyncThunk("sendNotes", async (tempNote) => {
  const response = fetch("https://notes-backend-ujmp.onrender.com/notes/addnote", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(tempNote)
  })

  return await response.json()
})

export const updateNote = createAsyncThunk("updateNote", async (tempNote) => {
  const response = fetch("https://notes-backend-ujmp.onrender.com/notes/updatenote", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(tempNote)
  })

  return await response.json()
})

export const deleteNote = createAsyncThunk("deleteNote", async (id) => {
  const response = await fetch(`https://notes-backend-ujmp.onrender.com/deletenote/${id}`, {
    method:"DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
    
  })
  return id
})


export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.value.notesValue = action.payload;
      state.value.isLoading = false;
    })
    
    builder.addCase(fetchNotes.pending, (state) => {
      state.value.isLoading = true;
    })

    builder.addCase(sendNotes.fulfilled, (state, action) => {
      state.value.notesValue.push(action.payload);
    })

    builder.addCase(updateNote.fulfilled, (state, action) => {
      state.value.notesValue = state.value.notesValue.filter((note) => note.id != action.payload.id);
      state.value.notesValue.push(action.payload)
    })

    builder.addCase(deleteNote.fulfilled, (state,action) => {
      state.value.notesValue = state.value.notesValue.filter((note) => note.id != action.payload)
    })

  },
  reducers: {
    addNote: (state, action) => {
      state.value.push(action.payload)
    },

  },
})


export const { addNote, } = notesSlice.actions

export default notesSlice.reducer