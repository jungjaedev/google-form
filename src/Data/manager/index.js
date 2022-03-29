import { createSlice } from '@reduxjs/toolkit';

export const manager = createSlice({
  name: 'manager',
  initialState: {
    title: '제목 없는 설문지',
    description: '',
    menubarOffsetTop: 0,
    selectedComponent: '',
  },
  reducers: {
    updateTitleAction: (state, action) => {
      state.title = action.payload;
    },
    updateDescriptionAction: (state, action) => {
      state.description = action.payload;
    },
    updateMenubarOffsetTopAction: (state, action) => {
      state.menubarOffsetTop = action.payload;
    },
    updateSelectedComponentAction: (state, action) => {
      state.selectedComponent = action.payload;
    },
  },
});

export const { updateTitleAction, updateDescriptionAction, updateMenubarOffsetTopAction, updateSelectedComponentAction } = manager.actions;

export const title = state => state.manager.title;
export const description = state => state.manager.description;
export const menubarOffsetTop = state => state.manager.menubarOffsetTop;
export const selectedComponent = state => state.manager.selectedComponent;

export default manager.reducer;
