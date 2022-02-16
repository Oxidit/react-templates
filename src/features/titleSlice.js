import { createSlice } from '@reduxjs/toolkit'

export const titleSlice = createSlice({
  name: 'title',
  initialState: {
    value: ''
  },
  reducers: {
    changeTitle: (state, action) => {
       state.value = action.payload;
    }
  }
})

export const { changeTitle } = titleSlice.actions

export default titleSlice.reducer