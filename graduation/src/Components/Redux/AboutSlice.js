import { createSlice } from '@reduxjs/toolkit';

export const aboutSlice = createSlice({
  name: 'about',
  initialState: {
    id: 0,
    name: '',
  },
  reducers: {
    addName: (state, action) => {
      state.id = action.payload.id;
    },
    addNa: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { addName, addNa} = aboutSlice.actions;
export default aboutSlice.reducer;

