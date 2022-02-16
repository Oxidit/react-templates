import { createSlice } from '@reduxjs/toolkit'

import {
  FILTER_ALL,
} from '../actions'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: FILTER_ALL
  },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    }
  }
})

export const { changeFilter } = filterSlice.actions

export default filterSlice.reducer
