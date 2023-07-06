import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ISelectedLanguageInitialState } from '../interfaces';

const initialState: ISelectedLanguageInitialState = {
  selectedLanguage: 'ru',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setSelectedLanguage(
      state,
      action: PayloadAction<ISelectedLanguageInitialState>
    ) {
      state.selectedLanguage = action.payload.selectedLanguage;
    },
  },
});

export const { setSelectedLanguage } = languageSlice.actions;
export default languageSlice.reducer;
