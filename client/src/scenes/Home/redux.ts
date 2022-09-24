import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  chatData: any;
}

const initialState: InitialState = {
  chatData: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatData(state, action: PayloadAction<any[]>) {
      state.chatData = action.payload || [];
    },
  },
});

export const { setChatData } = chatSlice.actions;
export default chatSlice.reducer;
