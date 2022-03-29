import { createSlice } from '@reduxjs/toolkit';

export const manager = createSlice({
  name: 'manager',
  initialState: {
    title: '제목 없는 설문지',
    description: '',
  },
  reducers: {
    updateTitleAction: (state, action) => {
      state.title = action.payload;
    },
    updateDescriptionAction: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { updateTitleAction, updateDescriptionAction } = manager.actions;

export const title = state => state.manager.title;
export const description = state => state.manager.description;

export default manager.reducer;
