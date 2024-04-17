import { createSlice } from '@reduxjs/toolkit';

export const HomeSlice = createSlice({
  name: 'favor',
  initialState: {
    favoritse: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      state.favoritse = action.payload.favoritse;
    },

  },
});

export const {addFavorites} = HomeSlice.actions;
export default HomeSlice.reducer;
